const worksAPI = {
    works: [
        {
            id: 1,
            name: "Caso de estudio app cine",
            project: "All",
            images:[
                {
                    title: "uno",
                    url:"https://66.media.tumblr.com/eaada8890459baa6d376016190371952/tumblr_mw62jprJUF1qbpxtio1_500.png"
    
                }, {
                    title: "dos",
                    url:"https://66.media.tumblr.com/e24da742681c115228b9ae8ac6397adf/tumblr_mrubc0FEbf1qz6f9yo1_500.jpg"
    
                }, {
                    title: "tres",
                    url:"https://66.media.tumblr.com/afbe1f7cd10b8ee5e8b5af833ee6ca85/tumblr_motav527EU1r6wmavo1_500.jpg"
    
                }

            ]
            
        },
        {
            id: 2,
            name: "App control de flota de vehículos",
            project: "hacerlo"
        },
        {
            id: 3,
            name: "HROL - control de documentación",
            project: "hacerlo "
        },
        {
            id: 4,
            name: "AGUA—UIX Case Study",
            project: "Case study, https://medium.muz.li/agua-uix-case-study-9eb4eb886b2b"
        },
        {
            id: 5,
            name: "Booking.com: A UX Case Study",
            project: "https://uxdesign.cc/booking-com-a-ux-case-study-3ccfbfa82eec"
        }
    ],
    all: function() {
        return this.works;
    },
    get: function(id) {
        return this.works.find(u => u.id === id);
    }
};

export default worksAPI;
