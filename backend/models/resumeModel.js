const {Schema, model} = require("mongoose")



const portfolioSchema = Schema({
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
        required:true
    },
    Skill4:{
        type:String,
        required:true
    },
    AdditionalSkills:{
       type: [],
    },
    Percentage:{
        type:String,
        required:true
    },
    Percentage2:{
        type:String,
        required:true
    },
    Percentage3:{
        type:String,
        required:true
    },
    Percentage4:{
        type:String,
        required:true
    },
    CompanyStartdate:{
        type:String,
        required:true
    },
    CompanyEnddate:{
        type:String,
        required:true
    },
    Roll:{
        type:String,
        required:true
    },
    Companyname:{
        type:String,
        required:true
    },
    ExperienceDescription:{
        type:String,
        required:true
    },
    Title:{
        type:String,
        required:true
    },
    Link:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    }
    
})

const Portfolio = model("portfolios", portfolioSchema)

module.exports = Portfolio