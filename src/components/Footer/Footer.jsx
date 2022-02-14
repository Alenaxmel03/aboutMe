import React from "react";
import s from "./Footer.module.css";


const Footer = () => {
    return(
        <footer class={s.footer}>
            <div class={s.footer__copy}>&#169; 2021</div>
            <div class={s.footer__text}>alenaxmel03@gmail.com</div>
        </footer>
    )
}

export default Footer;