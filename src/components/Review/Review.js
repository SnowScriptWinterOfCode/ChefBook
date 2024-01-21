import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Review.css';
const Review=()=>{
    const reviewItems = [
        {
            name: 'Rekob Ramya',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
            img: 'https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg?w=740&t=st=1705337060~exp=1705337660~hmac=62ff5df48644e9ce535dc02c0f5c333d766ca5357e8e76329c15dec2f09db439'
        },
        {
            name: 'Brandon Savage',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
            img: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740&t=st=1705337018~exp=1705337618~hmac=04e09531cc6329d6a8bd1a03590618a318956f4a577e8f4baac7cb4626dca710'
        },
        {
            name: 'Steve Burns',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
            img: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=740&t=st=1705337090~exp=1705337690~hmac=c7a97c7e48fe294970d29ac0e5853e542efec82352eb26015c02162cb2ebe87e'
        },
        {
            name: 'Kevin Canlas',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
            img: 'https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129416.jpg?w=740&t=st=1705337113~exp=1705337713~hmac=8660ded1eb6d03fbd65b64a173afd5510a3cf30a6045671516d5fae3de6d047b'
        },
    ]
    //Owl Carousel Settings
    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    };
    return (
        <section id="testimonial" className="testimonials pt-70 pb-70">
            <div className="container mt-5">
                
                <div className="col-md-14 ">
                    <h4 className="miniTitle text-center">TESTIMONIALS</h4>
                    <h3 className="sectionTitle">What Our Clients are Saying?</h3>
                </div>
                <p className="text-center ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                <div className="row">
                    <div className="col-md-12">
                        <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                            {
                               
                                    reviewItems.map(reviewDetail => {
                                        return (
                                            <ReviewItem reviewDetail={reviewDetail} key={reviewDetail._key} />

                                        )
                                    })
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;