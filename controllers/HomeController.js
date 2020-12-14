//アクションメソッド
exports.index = (req,res)=>{
    // res.send('HelloController index')
    // res.render('home/index.ejs')    
    //処理
    let data = {
        title: 'index page',
        message: 'Welcome to Homepage',
    }
    //HTMLの表示&dataを受け渡す
    res.render('home/index.ejs',data)
}

exports.about = (req,res)=>{
    //処理
    let data = {
        title: 'About Page',
        message: 'This is about page',
        name: 'Tokyo Taro',
    }
    //HTMLの表示&dataを受け渡す
    res.render('home/about.ejs',data)
}

exports.items = (req,res)=>{
    let items=[
        {name: 'Apple',price:150},
        {name: 'Orange',price:200},
        {name: 'Peach',price:350},
    ]
    //処理
    let data = {
        items: items,
    }
    //HTMLの表示&dataを受け渡す
    res.render('home/items.ejs',data)
}