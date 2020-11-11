const isLogin=(req,res,next)=>{
    if (req.session.user==null||req.session.user==undefined) {
        req.flash('alertMessage','The session has expired, please login again');
        req.flash('alertStatus', 'danger');
        res.redirect('/admin/login');
    }else{
        req.next();
    }
}

module.exports=isLogin;