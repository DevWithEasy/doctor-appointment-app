export const carouselData= [
    {
        id : 1,
        subject : 'Easy to Join !',
        details : 'Get an appointment from at home easily',
        image : require('../assets/images/profile.png'),
        page_title : 'Create account', 
        page : 'Signup',
        button : true,
    },
    {
        id : 2,
        subject : 'Totally Free service',
        details : 'Get an appointment to your favourite doctor without cost.No cost fee  reqired.',
        image : require('../assets/images/advice.png'),
        page_title : 'Book appointment', 
        page : 'Doctors',
        button : false,
    },
    {
        id : 3,
        subject : 'Free Doctor Advertisements',
        details : 'Create your doctor profile easily.Cost free Advertise doctor profile and reach patient.',
        image : require('../assets/images/doctor.png'),
        page_title : 'Apply to doctor', 
        page : 'Apply Doctor',
        button : false
    },
]

export const servicesData = [
    {
        id : 1,
        image :require('../assets/images/service_appointment.png'),
        direction : 'flex-row',
        title : 'Find Appointment',
        details : 'Find a doctor according to your needs.Make your appointment on the scheduled day and see the doctor. God is the owner of healing.',
        page : 'Find Appointment'
    },
    {
        id : 2,
        image :require('../assets/images/service_doctor.png'),
        direction : 'flex-row-reverse',
        title : 'Find Doctor',
        details : 'Find the required specialist on the scheduled day and make an appointment.',
        page : 'Doctors'
    },
    {
        id : 3,
        image :require('../assets/images/service_hospital.png'),
        direction : 'flex-row',
        title : 'Hospitals',
        details : 'Find a hospital clinic diagnostic center near you. See which doctors serve at this location.',
        page : 'Hospitals'
    },
    {
        id : 4,
        image :require('../assets/images/service_ambulance.png'),
        direction : 'flex-row-reverse',
        title : 'Ambulances',
        details : 'If you need an ambulance at any time, contact by phone.',
        page : 'Ambulances'
    },
    {
        id : 5,
        image :require('../assets/images/service_blood_bank.png'),
        direction : 'flex-row',
        title : 'Blood Bank',
        details : 'Blood donor willing to give blood, find your required blood group in difficult times. Talk to the donor.',
        page : 'Blood Bank'
    },
]