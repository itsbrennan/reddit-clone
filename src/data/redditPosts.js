import moment from 'moment';

export default 

[
    {
            title: "This is a new moose",
            comments: 508,
            submissionTime: moment()
    },
    {  
            title: "This is a new moose",
            comments: 523,
            submissionTime: moment().subtract(1,'minute')
    },
    {     
            title: "This is a new moose", 
            comments: 8, 
            submissionTime: moment().subtract(5,'hours')
    },
    {       
            title: "This is a new moose", 
            comments: 85, 
            submissionTime: moment().subtract(1,'days')
    }
]