$(document).ready(function () {

    (function ($) {
        "use strict";


        jQuery.validator.addMethod('answercheck', function (value, element) {
            return this.optional(element) || /^\bcat\b$/.test(value)
        }, "type the correct answer -_-");

        // validate contactForm form
        $(function () {
            $('#contactForm').validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 2
                    },
                    subject: {
                        required: true,
                        minlength: 4
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    message: {
                        required: true,
                        minlength: 20
                    }
                },
                messages: {
                    name: {
                        required: "come on, you have a name, don't you?",
                        minlength: "your name must consist of at least 2 characters"
                    },
                    subject: {
                        required: "come on, you have a web address, don't you?",
                        minlength: "your address must consist of at least 4 characters"
                    },
                    email: {
                        required: "no email, no message"
                    },
                    message: {
                        required: "um...yea, you have to write something to send this form.",
                        minlength: "thats all? really?"
                    }
                },
                submitHandler: function (form) {
                    Email.send({
                        Host: "smtp.gmail.com",
                        Username: "pratiksocial1@gmail.com",
                        Password: "Pratik321",
                        To: 'pratikmmaniya244@gmai.com',
                        From: "pratiksocial1@gmail.com",
                        Subject: "pratiksocial1@gmail.com",
                        Body: "pratiksocial1@gmail.com",
                    }).then(message => {
                        console.log(message)
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo("slow", 0.15, function () {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor', 'default');
                            $('#success').fadeIn()
                        })
                    })
                    // $(form).ajaxSubmit({
                    //     type:"POST",
                    //     data: $(form).serialize(),
                    //     url:"contact_process.php",
                    //     success: function(data) {
                    //         console.log(data)
                    //         $('#contactForm :input').attr('disabled', 'disabled');
                    //         $('#contactForm').fadeTo( "slow", 0.15, function() {
                    //             $(this).find(':input').attr('disabled', 'disabled');
                    //             $(this).find('label').css('cursor','default');
                    //             $('#success').fadeIn()
                    //         })
                    //     },
                    //     error: function(data) {
                    //         $('#contactForm').fadeTo( "slow", 0.15, function() {
                    //             console.log(data)
                    //             $('#error').fadeIn()
                    //         })
                    //     }
                    // })
                }
            })
        })

    })(jQuery)
})