const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

//投稿を作成する
router.post("/", async (req, res) => {
    const newpost = new Post(req.body);
    try{
        const savedPost = await newpost.save();
        return res.status(200).json(savedPost);
    }catch(err){
        return res.status(500).json(err);
    }
});

//投稿を更新する
router.put("/:id", async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.updateOne({
                $set: req.body,
            });
            return res.status(200).json("投稿編集に成功しました");
        }else {
            return res.status(403).json("あなたは他の人の投稿を編集できません");
        }
    }catch(err){
        return res.status(500).json(err);
    }
});

//投稿を削除する
router.delete("/:id", async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.deleteOne();
            return res.status(200).json("投稿削除に成功しました");
        }else {
            return res.status(403).json("あなたは他の人の投稿を削除できません");
        }
    }catch(err){
        return res.status(500).json(err);
    }
});


//特定の投稿を取得する
router.get("/:id", async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
            return res.status(200).json(post);
    }catch(err){
        return res.status(500).json(err);
    }
});

//特定の投稿にいいねを押す
router.put("/:id/like", async (req, res) => {
        try{
            //いいねされる投稿
            const post = await Post.findById(req.params.id);
            //まだ投稿にいいねが押されていなかったら
            if(!post.likes.includes(req.body.userId)) {
                await post.updateOne({
                    $push: {
                        likes: req.body.userId,
                    },
                });
                return res.status(200).json("投稿にいいねをしました");
            //すでにいいねしていれば
            }else {
                //いいねしているユーザーIDを取り除く
                await post.updateOne({
                    $pull:{
                    likes: req.body.userId,
                    },
                });
                return res.status(200).json("いいねを外しました")
            }
        }catch(err){
            return res.status(500).json(err);
        }
});

//プロフィール専用のタイムラインの取得
router.get("/profile/:username", async (req, res) => {
    try {
        const user = await User.findOne({username: req.params.username });//自分を探す
        const posts = await Post.find({ userId: user._id });//自分の投稿を取得

        return res.status(200).json(posts);//全部まとめて返す
    }catch(err){
        return res.status(500).json(err);
    }
});

//タイムラインの投稿を取得
router.get("/timeline/:userId", async (req, res) => {
    try {
        const currentuser = await User.findById(req.params.userId);//自分を探す
        const userPosts = await Post.find({ userId: currentuser._id });//自分の投稿を取得

        const friendposts = await Promise.all(
            currentuser.followings.map((friendId) => {
                return Post.find({ userId: friendId });//フォロー中の人たちの投稿も取得
            })
        );
        return res.status(200).json(userPosts.concat(...friendposts));//全部まとめて返す
    }catch(err){
        return res.status(500).json(err);
    }
});


module.exports = router;