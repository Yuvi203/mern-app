const {Schema, model} = require("mongoose")

const portfolioSchema = Schema({
       Userid:{
         type:String
       },
        Profile:{
            type: String,
            required:true
        },
        Firstname:{
            type:String,
            required:true
          },
          Lastname:{
              type:String,
              required:true
          },
          Email:{
              type:String,
              required:[true, "Please enter your email"],
              trim: true,
              unique: true,
          },
          Profession:{
              type:String,
             required:true
          },
          PersonalDescription:{
            type:String,
            required:true
          },
          Age:{
              type:String,
              required:true
          },
          MobileNo:{
              type:String,
              required:true,
              unique:true
          },
      CollegeStartdate:{
        type:String,
        required:true
    },
    CollegeEnddate:{
        type:String,
        required:true
    },
    Degree:{
        type:String,
        required:true
    },
    University:{
        type:String,
       required:true
    },
    EducationDescription:{
        type:String,
        required:true
    },
    CollegeStartdate2:{
        type:String,
    },
    CollegeEnddate2:{
        type:String,
    },
    Degree2:{
        type:String,
    },
    University2:{
        type:String,
    },
    EducationDescription2:{
        type:String,
    },
    Skill:{
        type:String,
        required:true
    },
    Skill2:{
        type:String,
        required:true
    },
    Skill3:{
        type:String,
    },
    Skill4:{
        type:String,
    },
    Skill5:{
        type:String,
       
    },
    Skill6:{
        type:String,
    },
    Skill7:{
        type:String,
    },
    Skill8:{
        type:String,
    },
    Skill9:{
        type:String
    },
    Skill10:{
        type:String
    },
    CompanyStartdate:{
        type:String,
    },
    CompanyEnddate:{
        type:String,
    },
    Roll:{
        type:String,
    },
    Companyname:{
        type:String,
    },
    ExperienceDescription:{
        type:String,
    },
    CompanyStartdate2:{
        type:String,
    },
    CompanyEnddate2:{
        type:String,
    },
    Roll2:{
        type:String,
    },
    Companyname2:{
        type:String,
    },
    ExperienceDescription2:{
        type:String,
    },
    Fileurl:{
        type:String,
        required:true
    },
    Address1:{
        type:String
    },
    Address2:{
        type:String
    },
    Location:{
        type:String
    },
    Languages:{
        type:String
    },
    Sociallink1:{
        type:String,
        unique:true
    },
    Sociallink2:{
        type:String,
    },
    Sociallink3:{
        type:String,
    },
   ViewIdentifiers:[{type:String, unique:true}],
   Viewcount:{
    type:Number,
    default:0
   }
},
{timestamp:true}
)

const Portfolio = model("portfolios", portfolioSchema)

module.exports = Portfolio