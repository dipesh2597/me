import React, { Component } from 'react'

export default class Contact extends Component{
    render(){
        return(
<div>        
    <div class="media contact-info">
    <span class="contact-info__icon"><i class="icon-map"></i></span>
    <div class="media-body">
    <h3>Bangalore, India</h3>
    </div>
    </div>
    <div class="media contact-info">
    <span class="contact-info__icon"><i class="icon-phone"></i></span>
    <div class="media-body">
    <h3> +91 9977811806</h3>
    </div>
    </div>
    <div class="media contact-info">
    <span class="contact-info__icon"><i class="icon-mail"></i></span>
    <div class="media-body">
    <h3> dipeshsharma2507@gmail.com</h3>
    </div>
    </div>
</div>
        )
    }
}