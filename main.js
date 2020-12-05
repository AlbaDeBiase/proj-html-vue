var app = new Vue ({
    el:'#wrap',
    data: {
        // header:["Courses","Course Formats","Add Corses","Pages", "Demos"],
        pages:["Blog","Home","Shortcodes","Couses", "Membership","Tipografy"],
        url:"https://www.netflix.com/browse",
        indexvalue:0,
        header: [
            {
                name:"Courses",
                link:"https://www.netflix.com/browse",

            },

            {
                name: "Course Formats",
                link:"https://www.unieuro.it/online/",
            },

            {
                name: "Course Formats",
                link:"https://www.primevideo.com/splash/watchAnywhere/ref=atv_dp_hd_dev?language=it_IT",
            },

            {
                name: "Course Formats",
                link:"https://www.italotreno.it/it",
            },

            {
                name: "Course Formats",
                link:"https://www.amazon.it/"
            },
        ],

    }

})
