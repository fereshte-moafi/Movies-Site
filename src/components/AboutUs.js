import React, { Component } from 'react';
import "../styles/contact_style.css"

class AboutUs extends Component {
    render() {
        return (
            <div class="container">
                <div class="content">
                    
                    <div class="right-side">
                        <div class="address details">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="topic">آدرس</div>
                            <div class="text-one">البرز, مجتمع تجاری انقلاب</div>
                            <div class="text-two">پلاک 26</div>
                        </div>
                        <div class="phone details">
                            <i class="fas fa-phone-alt"></i>
                            <div class="topic">شماره تماس</div>
                            <div class="text-one">+0098 9893 1234</div>
                            <div class="text-two">+0096 3434 1234</div>
                        </div>
                        <div class="email details">
                            <i class="fas fa-envelope"></i>
                            <div class="topic">ایمیل</div>
                            <div class="text-one">fe.ghorbanzade@gmail.com</div>
                            <div class="text-two">f.moafi2020@gmail.com</div>
                        </div>
                    </div>


                    <div class="left-side">
                        <div class="topic-text">تماس با ما</div>
                        <p>
                            هرگونه سوال یا مشکلی را می توانید با ما در میان بگذارید. ما سعی می کنیم در سریع ترین زمان پاسخگوی
                            شما باشیم.
                        </p>
                        <form action="#">
                            <div class="input-box">
                                <input type="text" placeholder="نام خود را وارد نمایید"></input>
                            </div>
                            <div class="input-box">
                                <input type="text" placeholder="ایمیل خود را وارد نمایید"></input>
                            </div>
                            <div class="input-box message-box">
                                <textarea cols="10" rows="10" placeholder="پیام خود را وارد نمایید"></textarea>
                            </div>
                            <div class="button">
                                <input type="button" value="ارسال پیام"></input>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        );
    }
}
export default AboutUs;