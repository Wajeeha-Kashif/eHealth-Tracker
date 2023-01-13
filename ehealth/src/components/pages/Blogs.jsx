import React from "react";
import "./Post.css";
import Post from "./Post";

const Blogs = () => {
    const blogPosts = [
      {
        title: "The Natural Doctor",
        body: `The Natural Doctor cover informational topics from Dr. Nyjon Eccles, one of the leading Integrated Medicine Physicians in the UK. The Natural Doctor aims to help potential or existing patients achieve optimal health. The blog brings the latest in women’s and men’s health articles, natural medicine, healthy recipes and anti-ageing tips. They also offer services for anti-ageing, menopause, private breast thermography, breast health panels and bioidentical hormone replacement.`,
        author: "Nishant Singh ",
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgmmo2HkP5CVCxEt1BTHP5gy3ozpamcTNvoQ&usqp=CAU",
      },
      {
        title: "Get Better Health ",
        body: `Better Health prides itself on providing “smart health commentary.” With the site’s wide array of informative articles, videos, and audio files about healthcare services, Better Health is a useful tool to guide both patients and medical professionals in the field. Aside from news articles about the latest healthcare trends, readers can also expect professional opinion and health tips from the pros themselves.

        `,
        author: "Suresh Kr",
        imgUrl:
          "https://img.freepik.com/premium-photo/portrait-young-male-doctor-white-medical-jacket-holding-thermometer-isolated-blue-background-medicine-concept_533057-1075.jpg",
      }
      ,
      {
        title: "Doctor's Opinion ",
        body: `The Doc’s Opinion blog contains general information written by Axel F. Sigurdsson, MD, a specialist in internal medicine and cardiology. Considered by Healthline as one of the Best Blogs about Heart Disease in 2017, Doc’s Opinion focuses on a wide range of topics not just about heart disease, but also about nutrition, the prevention of disease, and achieving a healthy lifestyle.
        `,
        author: "Adam Milne",
        imgUrl:
          "https://hips.hearstapps.com/hmg-prod/images/766/signs-of-high-blood-pressure-main-1517587201.jpg?crop=0.636xw:1xh;center,top&resize=640:*",
      }
      ,
      {
        title: "DB’s Medical Rants ",
        body: `DB’s Medical Rants cover educational ideas that come from Dr. Robert M. Centor, an academic general internist and medical campus regional dean. Having enjoyed blogging since 2002, Centor started airing his thoughts through what was initially a non-medical blog, until he did more linking than philosophizing. His stand on healthcare and medicine provokes readers' thoughts in a good way and sparks discussions with others.


        `,
        author: "Albert Son",
        imgUrl:
          "https://3cjb9a442fl73fj1xd17dq8d-wpengine.netdna-ssl.com/wp-content/uploads/2020/06/How-to-File-a-Complaint-Against-a-Doctor-in-Ohio.jpg",
      }
      ,
      {
        title: "Street Watch ",
        body: `Street Watch is home to interesting stories of a paramedic’s daily life. Readers of the blog will experience being out there where the action is during scene calls through the writer’s posts. In Street Watch, readers will both be educated and engaged at the same time with the relevant posts that are based on experience and clear facts, making it an enjoyable read for individuals both in the medical and non-medical field.
        `,
        author: "Rohit Gavskar",
        imgUrl:
          "https://i.ndtvimg.com/i/2015-05/625-heart_625x350_61431780510.jpg",
      }
      ,
      {
        title: "Emergency Dentists ",
        body: `Emergency Dentists is always adding new and informative dental care articles to their library. They meet with dentists, discuss topics they find to be important, and then disseminate that information to everyone online. They are committed to ensuring readers learn everything there is about oral health, so they can do what is needed to keep their teeth and gums healthy.


        `,
        author: "John T.",
        imgUrl:
          "https://media.istockphoto.com/photos/doctor-with-badge-picture-id473578138?k=20&m=473578138&s=612x612&w=0&h=-CrQyKSTe4Sh5yq733-lOaaukEW0ucarGVQJdNol03o="
      }
    ];
    return (
        <div class="grid-container">
      
      {blogPosts.map((post, index) => (
        <Post key={index} index={index} post={post} /> 
      ))}

    </div>
  )
};
  
export default Blogs;