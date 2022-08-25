const Feedback=require('../model/feedback');


exports.postfeedback=async(req,res,next)=>{
   
 const name=req.body.name;
 
    const email=req.body.email;
    
        const subject=req.body.subject;

        const message=req.body.message;

        await Feedback.create({
            name:name,
            email:email,
            subject:subject,
            message:message
        }).then(()=>{
            res.status(200).send("message sent ")
        }).catch(err=>{
            res.status(400).send("something error");
        })

}
