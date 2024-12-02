import Filler from '../../assets/MeetTheTeam//Logo_Filler.png';

// Co-Chair Pictures
import Triya from '../../assets/MeetTheTeam/Co-Chairs/Triya_Co-Chair.jpg';
import Luana from '../../assets/MeetTheTeam/Co-Chairs/Luana_Co-Chair.jpg';
import Bohina from '../../assets/MeetTheTeam/Co-Chairs/Bohina_Co-Chair.png';
import Rumaisa from '../../assets/MeetTheTeam/Co-Chairs/Rumaisa_Co-Chair.jpg';

// IT Team Pictures
import Julia from '../../assets/MeetTheTeam/IT/Julia_ITDirector.jpg';
import Dimitra from '../../assets/MeetTheTeam/IT/Dimitra_ITExecutive.jpg';
import Aryan from '../../assets/MeetTheTeam/IT/Aryan_Kansagara_IT_Executive.jpg';
import Joanne from '../../assets/MeetTheTeam/IT/Joanne_ITExecutive.jpg';
import Rayyan from '../../assets/MeetTheTeam/IT/Rayyan_ITExecutive.jpg';
import Natalie from '../../assets/MeetTheTeam/IT/Natalie_ITExecutive.jpg';
import Madeleine from '../../assets/MeetTheTeam/IT/Madeleine_ITExecutive.jpg';
import Trinity from '../../assets/MeetTheTeam/IT/Trinity_ITExecutive .jpg';

// Logistics Team Pictures
import Sabriha from '../../assets/MeetTheTeam/Logistics/Sabriha_LogisticsDirector.png';
import Misheel from '../../assets/MeetTheTeam/Logistics/Misheel_LogisticsExecutive.png';
import James from '../../assets/MeetTheTeam/Logistics/James_LogisticsExec.jpg';
import Assem from '../../assets/MeetTheTeam/Logistics/Assem_LogisticsExec.jpg';  
import Aditi from '../../assets/MeetTheTeam/Logistics/Aditi_LogisticsExecutive.jpg';  
import Kristin from '../../assets/MeetTheTeam/Logistics/Kristin_LogisticsExecutive.jpg';
import Mahnsi from '../../assets/MeetTheTeam/Logistics/Mahnsi_LogisticsExecutive.jpg';
import Vibitha from '../../assets/MeetTheTeam/Logistics/Vibitha_LogisticsExecutive.jpg';

// Marketing Team Pictures
import Ning from '../../assets/MeetTheTeam/Marketing/Ning_MarketingDirector.jpg';
import Katsa from '../../assets/MeetTheTeam/Marketing/Katsa_Marketing.jpg';
import Rodiat from '../../assets/MeetTheTeam/Marketing/Rodiat_Marketing.jpg';
import Ann from '../../assets/MeetTheTeam/Marketing/Ann_Marketing.jpg';
import Basak from '../../assets/MeetTheTeam/Marketing/Basak_Marketing.jpg';
import Kelly from '../../assets/MeetTheTeam/Marketing/Kelly_CreativeMedia.jpg';
import Eloise from '../../assets/MeetTheTeam/Marketing/Eloise_CreativeMedia.png';
import Harper from '../../assets/MeetTheTeam/Marketing/Harper - Social Med & Outreach.jpg';


// Sponsorship Team Pictures
import Sidney from '../../assets/MeetTheTeam/Sponsorship/Sidney_SponsorshipDirector.jpg';
import Charlene from '../../assets/MeetTheTeam/Sponsorship/Charlene_Sponshorship Executive.jpg';
import Anagha from '../../assets/MeetTheTeam/Sponsorship/Anagha_SponsorshipExecutive.jpg';
import Anusha from '../../assets/MeetTheTeam/Sponsorship/Anusha_SponsorshipExecutive.jpg';
import Brianna from '../../assets/MeetTheTeam/Sponsorship/Brianna_SponsorshipExecutive.jpg';

const teams = {
  coChairs: [
    { name: 'Triya Augustine', title: 'Co-Chair', image: Triya},
    { name: 'Luana Ribeiro Madeira', title: 'Co-Chair', image: Luana},
    { name: 'Bohina Manochehrzadeh', title: 'Co-Chair', image: Bohina},
    { name: 'Rumaisa Nawar', title: 'Co-Chair', image: Rumaisa},
  ],
  it1: [
    { name: 'Julia Da Silva', title: 'IT Director', image: Julia },
    { name: 'Dimitra Balasingam', title: 'IT Designer', image: Dimitra},
    { name: 'Aryan Kansagara', title: 'IT Executive', image: Aryan},
    { name: 'Joanne Wijetunga', title: 'IT Executive', image: Joanne},
    { name: 'Rayyan Ahmed', title: 'IT Executive', image: Rayyan },
  ],
  it2: [
    { name: 'Natalie Lewis', title: 'IT Executive', image: Natalie},
    { name: 'Madeleine Falcon', title: 'IT Executive', image: Madeleine },
    { name: 'Trinity Mae Robel', title: 'IT Executive', image: Trinity},
    { name: 'Khushi Jain', title: 'IT Executive', image: Filler },
    { name: 'Hyunji Yun (Hailey)', title: 'IT Executive', image: Filler },
  ],
  logistics1: [
    { name: 'Sabriha Amin', title: 'Logistics Director', image: Sabriha },
    { name: 'Misheel Tuguldur', title: 'Logistics Executive', image:  Misheel},
    { name: 'James Liang', title: 'Logistics Executive', image: James },
    { name: 'Assem Malgazhdarova', title: 'Logistics Executive', image: Assem },
    { name: 'Aditi Patel', title: 'Logistics Executive', image: Aditi },
  ],
  logistics2: [
    { name: 'Kristin Obinque Villena', title: 'Logistics Executive', image: Kristin },
    { name: 'Mahnsi Ruparelia', title: 'Logistics Executive', image:  Mahnsi},
    { name: 'Vibitha SureshKumar', title: 'Logistics Executive', image: Vibitha },
    { name: 'Asma Hashar', title: 'Logistics Executive', image: Filler },
    { name: 'Kimli Nguyen (Kim)', title: 'Logistics Executive', image: Filler },
  ],
  marketing1: [
    { name: 'Wan Ning Ma', title: 'Marketing Director', image: Ning},
    { name: 'Katsa Bejemil', title: 'Social Media Exec', image: Katsa },
    { name: 'Rodiat Adeoye', title: 'Social Media Exec', image: Rodiat },
    { name: 'Ann Margarette Orita', title: 'Social Media Exec', image: Ann},
    { name: 'Basak Babadagi', title: 'Social Media Exec', image: Basak },
  ],
  marketing2: [
    { name: 'Huyen Le (Harper)', title: 'Social Media Exec', image: Harper},
    { name: 'Kelly Mark', title: 'Creative Media', image: Kelly},
    { name: 'Phuong Anh Nguyen (Eloise)', title: 'Creative Media', image: Eloise},
    { name: 'Heba El Dassouki', title: 'Creative Media', image: Filler },
  ],
  sponsorship1: [
    { name: 'Yuqian Liu (Sidney)', title: 'Sponsorship Director', image: Sidney },
    { name: 'Charlene Noye', title: 'Sponsorship Executive', image: Charlene},
    { name: 'Anagha Koroth', title: 'Sponsorship Executive', image: Anagha},
  ],

  sponsorship2: [
    { name: 'Anusha Masroor', title: 'Sponsorship Executive', image: Anusha },
    { name: 'Brianna Nguyen', title: 'Sponsorship Executive', image: Brianna},
    { name: 'Pramitha Raja Madhukar', title: 'Sponsorship Executive', image: Filler },
  ],
};
export default teams;
