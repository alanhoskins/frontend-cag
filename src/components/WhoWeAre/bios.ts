// Board Images
import Bradford from '../../images/who-we-are/board/Board_Bradford.jpeg';
import Dolezalek from '../../images/who-we-are/board/Board_Dolezalek.jpg';
import Foster from '../../images/who-we-are/board/Board_Foster.jpg';
import Frazier from '../../images/who-we-are/board/Board_Frazier.jpg';
import Gordon from '../../images/who-we-are/board/Board_Gordon.jpg';
import Henning from '../../images/who-we-are/board/Board_Henning.jpeg';
import Lee from '../../images/who-we-are/board/Board_Lee.jpg';
import McCall from '../../images/who-we-are/board/Board_McCall.jpg';
import MendezGonzalez from '../../images/who-we-are/board/Board_Mendez_Gonzalez.jpg';
import Mitchell from '../../images/who-we-are/board/Board_Mitchell.jpg';
import Onigbanjo from '../../images/who-we-are/board/Board_Onigbanjo.jpg';
import Schutz from '../../images/who-we-are/board/Board_Schutz.png';
import Steinrock from '../../images/who-we-are/board/Board_Steinrock.jpg';
import Torres from '../../images/who-we-are/board/Staff_Torres.jpg';
import White from '../../images/who-we-are/board/Board_White.jpg';

// Operations Images
import Brown from '../../images/who-we-are/operations/Staff_Brown.png';
import JewellJordin from '../../images/who-we-are/operations/Staff_Jewell.jpg';
import Walton from '../../images/who-we-are/operations/Staff_Walton.png';
import Zacks from '../../images/who-we-are/operations/Staff_Zacks.jpg';

// Technical Images
import DeSant from '../../images/who-we-are/technical/Staff_DeSant.png';
import Hernandez from '../../images/who-we-are/technical/Staff_Hernandez.png';
import JewellAlex from '../../images/who-we-are/technical/Staff_Jewell.jpg';
import Nagra from '../../images/who-we-are/technical/Staff_Nagra.png';
import Liriano from '../../images/who-we-are/technical/Staff_Liriano.jpg';

// Artists Images
import Moorman from '../../images/who-we-are/operations/Staff_Moorman.jpg';
import Salemi from '../../images/who-we-are/artists/Staff_Salemi.jpg';
import Voghel from '../../images/who-we-are/artists/Artist_Voghel.png';

const bioId = () => (<any>crypto).randomUUID();

const bios = {
  board: [
    {
      id: bioId(),
      name: 'J​oey M. McCall, Esq.',
      role: 'President',
      pronouns: 'he/him',
      affiliation:
        'Founder & Managing Partner, McCall | Atten; Founder & Chief Vision Officer, Law Lynx',
      image: McCall,
      linkedin: 'joey-m-mccall-esq-303356143',
      bio:
        'is the founding Principal and Managing Partner of McCall | Atten, International, PLLC. McCall | Atten, International provides legal representation in the following areas: Real Estate Transactional Services, Real Estate Litigation, Civil Litigation, Immigration, and Outside General Counsel Services for Small to Mid-Sized Businesses. With a strong foundation rooted in establishing quality long-lasting relationships, both business and personal, Mr. McCall identifies the most effective legal solutions to the individual legal needs his clients may encounter during their professional and personal lives. Mr. McCall continuously strives to resolve all conflicts for his clients in the most optimal and effective manner.'
    },
    {
      id: bioId(),
      name: 'Tatum Lee',
      role: 'Secretary',
      pronouns: 'she/her',
      affiliation: 'Consultant, Boston Consulting Group',
      image: Lee,
      linkedin: 'tatumlee',
      bio:
        'is currently a consultant at the Boston Consulting Group, and has worked with companies in the technology, retail, and entertainment industries. Tatum graduated from the University of Texas, where she studied Finance and Liberal Arts. She’s had a passion for theatre her whole life, and has previously worked as a stage manager and production assistant for various companies.'
    },
    {
      id: bioId(),
      name: 'Alexis White',
      role: 'Treasurer',
      pronouns: 'she/her',
      affiliation:
        'Deputy Budget Director, Office of Budget and Management, City of Chicago',
      image: White,
      linkedin: 'alexismwhite82',
      bio:
        "serves as Deputy Budget Director for the City of Chicago Office of Budget and Management. She has years of successful experience in fiscal management, project management, and people operations. Alexis graduated from the University of Illinois at Urbana-Champaign with a B.Sc. in Marketing from Southern Illinois University Edwardsville and a Master's in Business Administration. Alexis has served in a budgeting capacity at both the State of Illinois- Office of Management and Budget and the City of Chicago- Office of the City Clerk. She is a Board Member for Southern Illinois University Alumni Board-Chicago Chapter. She is also an active member of Alpha Kappa Alpha Sorority, Incorporated and serves in the capacity of Small Group Leader and alumni of Bonfire Women- Women Leadership Development Program. She was a Mentor Coach for the America Needs You program which focuses on First-Generation College students. Alexis is also a co-founder of Build Up Bold, a professional development collective and a former Board Member for Women in Public Finance-Chicago Chapter. Alexis has also volunteered with the Greater Chicago Food Depository and Lakeview Pantry."
    },
    {
      id: bioId(),
      name: 'Tommy J. Bradford',
      role: 'Board Member',
      pronouns: 'he/him',
      affiliation: 'Educator, Chicago Public Schools',
      image: Bradford,
      linkedin: 'tommy-bradford-b77475a',
      bio: null
    },
    {
      id: bioId(),
      name: 'Zeke Dolezalek',
      role: 'Board Member',
      pronouns: 'he/him',
      affiliation:
        'Human Resources & Recruitment Manager, Corner Table Restaurants',
      image: Dolezalek,
      linkedin: 'iamzeked',
      bio:
        'In the workplace or in the community, Zeke has a passion for creating spaces in which people can thrive. As a People & Culture professional, Zeke strives to unite people together by encouraging conversations and empowering others. Over the course of his time at What if Syndicate, Zeke has overseen a near 200% increase of staff, over 6 new property openings, labor laws and employee relations in over 5 markets, and growth and development planning for several leaders and operators within our brands.\n\nWith a BFA in Musical Theatre from the Chicago College of Performing Arts, Zeke has spent time actively involved in the Chicago theatre community both on and off-stage. As a professional photographer, Zeke specializes in headshots, events, and production photography/B-roll. @iAmZekeD'
    },
    {
      id: bioId(),
      name: 'Cheryl Frazier',
      role: 'Board Member',
      pronouns: 'she/her',
      affiliation:
        'Director of Test Adjudication, Southland College Prep Charter HS',
      image: Frazier,
      linkedin: 'cheryl-frazier-28938154',
      bio:
        'hails from the Chicago south suburb of Markham, Illinois whose love for theatre was nurtured by competing in speech and drama at Thornwood High School. Cheryl Frazier is a nationally recognized forensics educator, who has served as Director of Forensics and Theatre at Southland College Prep Charter since 2011. Frazier started her teaching career at South Holland (Illinois) Thornwood High School in 1997 as a speech and science teacher and held various extracurricular positions, including theatre manager, head speech coach, and assistant play director. She additionally served Thornwood as the Fine Arts Department Chair and Arts and Communication House Leader before becoming the Fine Arts Area Instructional Leader for District 205. As the group interpretation director at both Thornwood and Southland College Prep, she was a seven-time state champion, five-time state runner up and six-time finalist director. Additionally, under Frazier’s direction numerous students have won Illinois High School Association (IHSA) regional, sectional, and state titles and National Speech and Debate Association national speech titles. Frazier was named the 2018-19 Outstanding Debate and Theatre Educator for the National Federation of High School’s (NFHS) central section of Illinois, Indiana, Iowa, Michigan and Wisconsin and is a 2020 recipient of the NFHS Citation award. As she moves from directing and coaching to acting, the role of Lena “Mama” Younger remains her favorite, playing it three times since 2014. Frazier is a graduate of Drake University, and also earned a master’s degree in Communications Studies from Governors State University, as well. Frazier believes in the power of the spoken word and the impact BIPOC artists have in using their gifts to heal a community.'
    },
    {
      id: bioId(),
      name: 'R. Jeffrey Henning',
      role: 'Board Member',
      pronouns: 'he/him',
      affiliation: 'Vice President, Havener Tech',
      image: Henning,
      linkedin: 'jeff-henning-63b2324',
      bio: null
    },
    {
      id: bioId(),
      name: 'Erin Mitchell',
      role: 'Board Member',
      pronouns: 'she/her',
      affiliation: 'Business Consultant, Erin Mitchell Consulting',
      image: Mitchell,
      linkedin: 'erin-m-6749b28',
      bio: null
    },
    {
      id: bioId(),
      name: 'Adebayo Onigbanjo',
      role: 'Board Member',
      pronouns: 'he/him',
      affiliation:
        'Director of Digital Strategy and Product Planning, Cummins Inc.',
      image: Onigbanjo,
      linkedin: 'aonigbanjo',
      bio:
        'helps to position businesses for what’s next and brings unique insights into the growing power of new markets on breakthrough innovation and business transformation. \n\nAdebayo is the principal Internet of Things platforms and applications for Wabtec – A GE Transportation company, where he sets both the technical and commercial strategies and processes to transform a century old industry as well as enabled a truly inter-modal solution by bringing Internet of Things, mobility and cloud solutions to customers. \nHe has a background in computer science and data communication systems with over 20 years working experience from Motorola, MTN, Zebra Technologies and GE. \n\nAdebayo holds executive advisor roles at both startups and global technology brands, he is a member of the Internet of Things advisory board to the city of Chicago, a mentor at M-Hub, co-founder of SpectaPLAY, a founding member of the Institute for African Future, and an advisor to several governments. Connect on LinkedIn and Twitter.'
    },
    {
      id: bioId(),
      name: 'Steven Zacks',
      role: 'Board Member',
      pronouns: 'he/him',
      affiliation: 'Product Manager, Trajecktory',
      image: Zacks,
      linkedin: 'stevenzacks',
      bio:
        'is a Product Manager, building software for the mortgage industry. Now based in Chicago, he has a BA in Economics from Fordham University and a J.D. from Washington University in St. Louis. Prior to moving to Chicago two years ago, Steven was a producer in Los Angeles, focusing mostly on documentaries and virtual reality experiences. His life goal is to steal a cape from Andrew Lloyd Webber.'
    }
  ],
  artists: [
    {
      id: bioId(),
      name: 'Chelsea Dàvid',
      role: 'Artist Board Member',
      pronouns: 'she/her',
      affiliation: null,
      image: null,
      linkedin: null,
      bio: null
    },
    {
      id: bioId(),
      name: 'Van Ferro',
      role: 'Artist Board Member',
      pronouns: 'he/him',
      affiliation: null,
      image: null,
      linkedin: null,
      bio: null
    },
    {
      id: bioId(),
      name: 'Celine Foster',
      role: 'N/A',
      pronouns: 'she/her',
      affiliation: '',
      image: Foster,
      linkedin: 'celine-foster-b19414149',
      bio:
        'is a recent graduate of Stanford University, where she received her Bachelors of Arts in Science, Technology, and Society with an emphasis in Media and Communication Studies. Celine hopes to continue her previous work in bolstering equity by supporting the growth of the Chicago Artist Guide.'
    },
    {
      id: bioId(),
      name: 'James Lewis',
      role: 'Artist Board Member',
      pronouns: 'he/him',
      affiliation: null,
      image: null,
      linkedin: null,
      bio: null
    },
    {
      id: bioId(),
      name: 'Alexandria Alyse Moorman',
      role: null,
      pronouns: 'she/her',
      affiliation: null,
      image: Moorman,
      linkedin: null,
      bio:
        'holds a BFA in Acting from Emerson College and is a proud recipient of the Isabel Sanford Award. While working in partnership with Cacique Youth Learning Center in the South End of Boston she helped lead and coordinate a classroom of Pre-K students through artistic workshops culminating in producing presentations of their original work. \n\nAlexandria’s credits as a performer/writer/poet/ improviser have been in collaboration with and on the stages of The MCA, iO (Diversity Scholar recipient), The Haitian American Museum, The Second City, The Den Theater, Brown Paper Box Co., Stage 773, The Annoyance, MPAACT Theater, Rough House Theater Co. among others. She is an ensemble member of The Not That Late Show, a monthly late night style talk show. She can also be heard as a recurring guest on the podcast Lifetime Uncorked, which was featured in O Magazine last year. \n\nFilm credits include How to Re-caulk Your Tub (Elevated FF - Audience Award Winner, Calgary Underground FF - Best Int. Short Winner), Mid 30’s Martyr (Austin Revolution FF - Best Actress Short Winner, Cindependent FF, San Angelo Revolution FF - Best Actress nom.), Ponytail (Shortcut 100 Int. FF - Winner: Audience Choice, Best Chicago Made, Female Filmmaker). When not dreaming of winning the lottery, she enjoys watching Bravo TV for all that nonsense, flexing her mixology skills, traveling and eating well with her partner John.'
    },
    {
      id: bioId(),
      name: 'Kaitlyn Salemi',
      role: null,
      pronouns: 'she/her',
      affiliation: null,
      image: Salemi,
      linkedin: 'kaitlynsalemi',
      bio:
        'holds a Bachelor of Music in Music Business and Theater from Elmhurst University and works as a Stage Manager in the Chicagoland Area. Kaitlyn is excited to be able to give back to the Chicago Theater Community with the Chicago Artist Guide and hopes to continue to empower theater makers through technology in the future.'
    },
    {
      id: bioId(),
      name: 'RJ Silva',
      role: 'Artist Board Member',
      pronouns: 'he/him',
      affiliation: null,
      image: null,
      linkedin: null,
      bio: null
    },
    {
      id: bioId(),
      name: 'Rachel Stiles',
      role: 'Artist Board Member',
      pronouns: 'she/her',
      affiliation: null,
      image: null,
      linkedin: null,
      bio: null
    }
  ],
  operations: [
    {
      id: bioId(),
      name: 'Anna Schutz',
      role: 'Executive Director',
      pronouns: 'she/her',
      affiliation: null,
      image: Schutz,
      linkedin: 'annaschutz',
      bio:
        "holds a BFA in Acting from the University of Illinois Urbana-Champaign and has worked in Chicago as a performer, playwright, and producer for over a decade. She co-founded the storefront theatre Brown Paper Box Co. and served as Managing Director during its 11 years of operation. Anna completed her Master of Nonprofit Management at DePaul University where her research was on Representation in Nonprofit Performing Arts Leadership. During that time she was the manager of DePaul’s Undergraduate Admission daily operations and guest experience where she had the privilege of leading a team of students, focusing on their professional development. ​She served twice as the TA for DePaul's Women in Chicago Theatre course exposing first year students to intersectional feminist theory through field trips to performances around the city. Previously, Anna facilitated technical and customer service training during her 6 years with Apple Inc. in its Chicago stores and around the world on its Global Retail Training team. She founded Chicago Artist Guide with the belief that technology can create access, and theatre can create change. Sunday in the Park with George will never not make her cry. More info at www.annaschutz.com."
    },
    {
      id: bioId(),
      name: 'Jordin Jewell',
      role: 'Marketing Director',
      pronouns: 'she/her',
      affilitation: 'Founder, West Loop Soul',
      image: JewellJordin,
      linkedin: 'jordinjewell',
      bio:
        'has specialized in marketing for over 9 years, dabbling in everything from graphic design to business development to strategy. Through her roles ranging from Social Media Strategist to Director of Marketing to Associate Strategic Director, she worked tirelessly to ideate unique, thoughtful solutions to revive marketing programs for clients ranging from local nonprofits to national brands. While she loved the work, her true passion is helping small businesses stand out on social media. That’s why she left her full-time agency career to focus on building a content marketing boutique agency with an emphasis on organic social media. As the founder of West Loop Soul, she helps small business owners and entrepreneurs uncover the soul of their brand through content marketing while making a big impact with a reasonable budget. She’s excited to bring this work to Chicago Artist Guide, helping support the vibrant Chicago theater community and the diverse talents that comprise it. When she’s not creating content for her clients, you can find her at the dog park with her boys, Chicken and Waffles.'
    },
    {
      id: bioId(),
      name: 'Alexandria Alyse Moorman',
      role: 'Development Manager',
      pronouns: 'she/her',
      affiliation: null,
      image: Moorman,
      linkedin: null,
      bio:
        'holds a BFA in Acting from Emerson College and is a proud recipient of the Isabel Sanford Award. While working in partnership with Cacique Youth Learning Center in the South End of Boston she helped lead and coordinate a classroom of Pre-K students through artistic workshops culminating in producing presentations of their original work. \n\nAlexandria’s credits as a performer/writer/poet/ improviser have been in collaboration with and on the stages of The MCA, iO (Diversity Scholar recipient), The Haitian American Museum, The Second City, The Den Theater, Brown Paper Box Co., Stage 773, The Annoyance, MPAACT Theater, Rough House Theater Co. among others. She is an ensemble member of The Not That Late Show, a monthly late night style talk show. She can also be heard as a recurring guest on the podcast Lifetime Uncorked, which was featured in O Magazine last year. \n\nFilm credits include How to Re-caulk Your Tub (Elevated FF - Audience Award Winner, Calgary Underground FF - Best Int. Short Winner), Mid 30’s Martyr (Austin Revolution FF - Best Actress Short Winner, Cindependent FF, San Angelo Revolution FF - Best Actress nom.), Ponytail (Shortcut 100 Int. FF - Winner: Audience Choice, Best Chicago Made, Female Filmmaker). When not dreaming of winning the lottery, she enjoys watching Bravo TV for all that nonsense, flexing her mixology skills, traveling and eating well with her partner John.'
    },
    {
      id: bioId(),
      name: 'Yazmin Torres',
      role: 'Business Manager',
      pronouns: 'she/her',
      affiliation: null,
      image: Torres,
      linkedin: 'yazmint',
      bio:
        'holds a BA from the University of Illinois at Chicago and an MBA from DePaul University. Yazmin is a driven, problem solving professional with great interpersonal skills and a commitment to team success. She currently is the coordinator of business services and financials at the UIC School of Architecture. Prior to joining the staff at UIC, she worked in a variety of fields, including business operations and inventory management for start-up companies. At DePaul University, Yazmin explored her interests in supply-chain data management as the VP of the Supply Chain Management Society and in community-building as a crisis intervention advocate. As an MBA student, she was able to see how her passion for social justice issues, coordination, and collaboration with channel partners interests.'
    },
    {
      id: bioId(),
      name: 'Steven Zacks',
      role: 'Head of Platform',
      pronouns: 'he/him',
      affiliation: null,
      image: Zacks,
      linkedin: 'stevenzacks',
      bio:
        'is a Product Manager, building software for the mortgage industry. Now based in Chicago, he has a BA in Economics from Fordham University and a J.D. from Washington University in St. Louis. Prior to moving to Chicago two years ago, Steven was a producer in Los Angeles, focusing mostly on documentaries and virtual reality experiences. His life goal is to steal a cape from Andrew Lloyd Webber.'
    },
    {
      id: bioId(),
      name: 'Missy Brown',
      role: 'Grant Writer',
      pronouns: 'she/her',
      affilitation: null,
      image: Brown,
      linkedin: 'missy-brown-a956a832',
      bio:
        'has been in leadership with Trader Joe’s for the last 28 years. With strong business acumen and a caring, inclusive, and community-minded approach, she has been regarded as a top leader and mentor in the company. She has a BA in Sociology, MA in Educational Leadership, and certification in Grant Writing. She began her grant writing journey to help the community on a different level and is optimistic for the future. Her varied interests include attending the theatre and live music, hiking, reading WWII fiction and mysteries of all kinds, yoga, cooking for friends, wine tasting, watching Top Chef, and photographing a sunset.'
    },
    {
      id: bioId(),
      name: 'Brianna Walton',
      role: 'Marketing Coordinator',
      pronouns: 'she/her',
      affilitation: null,
      image: Walton,
      linkedin: 'briannamwalton',
      bio:
        'is a Digital Marketing enthusiast who enjoys creating written and visual content. She has always been an extremely passionate writer and a social justice advocate. Brianna was able to explore these interests during her studies at Agnes Scott College where she earned a Bachelor of Arts degree in International Relations and Business Management. Previously, she was active in student organizations including Her Campus (as a Content Creator and Campus Correspondent) and Mortar Board (as a Director of Communications). She was also a Marketing intern at CARE USA, which allowed her to gain experience in website content accessibility. She is motivated by the idea of helping other people have equitable access to opportunities and resources that will allow them to pursue their life goals. During her free time, Brianna enjoys listening to music of pretty much any genre, sketching, painting, and spending time outdoors. She is also an animal lover and enjoys spending time caring for her two pet turtles along with almost any other animals she happens to cross paths with.'
    },
    {
      id: bioId(),
      name: 'Jacob Walz',
      role: 'Grants and Development Specialist',
      pronouns: 'he/him',
      affilitation: null,
      image: Brown,
      linkedin: 'jacob-walz-81ba27163',
      bio:
        'is a nonprofit professional from Massachusetts who has been working for nonprofits since he was 19 years old. After earning his BA from Assumption University, where he worked for four different Nonprofits, he earned the Crown and Shield award for Outstanding Community Service. Jacob is well-versed in Grant Writing, Donor Relations, Communications, and Volunteer Recruitment and is dedicated to making Arts and Music more accessible. For fun, Jacob enjoys choral singing, basketball, stand-up comedy, and gardening.'
    }
  ],
  technical: [
    {
      id: bioId(),
      name: 'Alex Jewell',
      role: 'Engineering Lead',
      pronouns: 'he/him',
      affiliation: 'VP, Director of Software Engineering @ Truist Foundry',
      image: JewellAlex,
      linkedin: 'alexjewellcom',
      bio:
        'is a socially-driven software engineering leader in banking innovation, focusing on innovation and web3 for consumer banking. Blockchain and decentralization consultant and activist. Artisan foodporn director and social media marketing expert at @bestfoodalex. Leftist ghostwriter for political organizations, global economic forums, and watchdog groups dealing with the Fourth Industrial Revolution, futurism, and decentralization.'
    },
    {
      id: bioId(),
      name: 'Grace Desant',
      role: 'Designer',
      pronouns: 'she/her',
      affiliation: null,
      image: DeSant,
      linkedin: 'grace-desant',
      bio:
        "holds a BA in Theatre from Millikin University, where she also minored in dance. She has worked as a theatre artist in Chicago for the past decade as a performer, producer, director, choreographer, and prop designer. In the past, she was co-chair of the Executive Board for Awakenings, a nonprofit art gallery that makes visible the experiences of sexual assault survivors. She also moonlights as a burlesque performer and producer Foxie la Fleur and co-founded Crescent Moon Nerdlesque in 2018. Grace is passionate about creating equal opportunities for artists and advocates for pay transparency within the performing arts community. In 2020, Grace decided to dive into UX Design through General Assembly's immersive program to marry her creative flair for visual design and passion for helping others. She aims to get certified in accessibility design in the future. She is thrilled to continue her journey as a UX designer with Chicago Artist Guide!"
    },
    {
      id: bioId(),
      name: 'Nicole Hernandez',
      role: 'Designer',
      pronouns: 'she/her',
      affiliation: null,
      image: Hernandez,
      linkedin: 'nicolehernandez-design',
      bio:
        'has an academic background in Child and Adolescent Development. After teaching at an elementary school for 8 years, she decided to pursue a different career path. She discovered UX/UI design and got her training through General Assembly User Experience Design Immersive course. When she’s not ‘designing’ you can find Nicole hanging out with her dog, Boo, working out, or trying the newest local restaurants.'
    },
    {
      id: bioId(),
      name: 'Alan Hoskins',
      role: 'Senior Frontend Engineer',
      pronouns: 'he/him',
      affiliation: null,
      image: null,
      linkedin: 'alanhoskins',
      bio: null
    },
    {
      id: bioId(),
      name: 'Gisselle Nagra',
      role: 'Designer',
      pronouns: 'she/her',
      affiliation: null,
      image: Nagra,
      linkedin: 'gissellenagra',
      bio:
        "received her BA in Psychology at the University of California, Berkeley. She approaches design with a focus on people, establishing empathy for those who create and use the product. Gisselle strives to take every opportunity to prioritize equity in her design process and continue to grow as a UX/UI Designer. She's excited to use her skills to create beautiful and meaningful work here at CAG. When she's not designing, Gisselle enjoys spending time with loved ones and immersing herself in new adventures!"
    }
  ],
  artistAdvisory: [
    {
      id: bioId(),
      name: 'Hallie Gordon',
      role: 'Advisory Board Member',
      pronouns: 'she/her',
      affiliation: 'Senior Associate Artistic Director, Olney Theatre Center',
      image: Gordon,
      linkedin: 'halliegordonl66',
      bio:
        'is the former Artistic and Education Director for Steppenwolf for Young Adults; over her tenure at Steppenwolf Theatre Company, she created a nationally recognized theatre education program for high school students. Programs included the Young Adult Council, a group of high school students from all over the city coming together weekly to learn the inner-workings of how a professional arts organization operates. Council members annually attend over 30 plays throughout Chicago, participate in workshops with leading theater professionals, and curate teen nights at Steppenwolf Theatre. Gordon commissioned playwrights to provide contemporary work that teens could see themselves in, these professional productions served over 15,000 students annually. As a theatre artist Gordon has directed numerous productions for Steppenwolf for Young Adults and Steppenwolf Theatre Company. \n\nAs a director she has worked with Writers Theatre, Northlight, The New Victory Theatre in NYC, and Rivendell Theatre where she is a proud ensemble member. She is currently consulting theatres in Arts Education work and is leading an initiative that intersects the arts with climate justice and social justice with Rivendell Theatre. Hallie is the recipient of The Helen Coburn Meier & Tim Meier Achievement Award.'
    },
    {
      id: bioId(),
      name: 'Carlene Liriano',
      role: 'Product Manager',
      pronouns: 'she/her',
      affiliation: 'Senior Product Manager, Angi',
      image: Liriano,
      linkedin: 'carlene-liriano-99390429',
      bio:
        'is a Product Manager based out of Chicago currently working in consulting and specializing in the incubation of new asset ideas and taking them from concept to market. Carlene has a degree in Computer Science and Economics from Columbia University and an MBA from Yale. She has spent the majority of her career working in technology and brings several years of experience productizing strategic visions, managing application design and development, and driving the end-to-end product lifecycle. \n\nWhen she’s not “product managing”, you can find Carlene browsing the stacks at Open Books (yay used bookstores!) or trying to leash-train her cat, Pepper.'
    },
    {
      id: bioId(),
      name: 'Luciana Mendez Gonzalez',
      role: 'Advisory Board Member',
      pronouns: 'she/her',
      affiliation: 'Software Engineer',
      image: MendezGonzalez,
      linkedin: 'lucianamendezg',
      bio:
        'is a software engineer and was the founding Technical Lead for Chicago Artist Guide. She graduated from DePaul University, cum laude, with a degree in mathematics and computer science, with concentrations in pure math, image processing and theory of computation. She works as an Appraiser On-Boarding Coordinator and has experience in image processing, cybersecurity, and web development. Her favorite musical is Hairspray.'
    },
    {
      id: bioId(),
      name: 'Zev Steinrock',
      role: 'Advisory Board Member',
      pronouns: 'he/him',
      affiliation:
        'Assistant Professor of Acting, University of Illinois Urbana-Champaign',
      image: Steinrock,
      linkedin: null,
      bio:
        'is a professional actor, fight director, intimacy director, and movement teacher. Professor Steinrock comes to us from Michigan State University, where he completed his MFA in Acting along with certifications in teaching yoga and for college teaching. His ongoing research centers around trauma-informed movement and stage combat training. After earning his BFA in Acting from Illinois Theatre in 2008, Prof. Steinrock spent several years as an actor and fight director for a variety of professional Theatre including Shattered Globe in Chicago and the renowned Paper Mill Playhouse in New Jersey. He is also a founding member of Chicago’s Brown Paper Box Theatre. Professor Steinrock is a Certified Intimacy Director with Intimacy Directors and Coordinators, Inc. and has worked as a choreographer all over the country. Prof. Steinrock most recently spent a year in Los Angeles teaching at the Stella Adler Academy of Acting, UC Irvine, and UC San Diego, along with choreographing intimacy for the South Coast Repertory Theatre. '
    },
    {
      id: bioId(),
      name: 'Alison Voghel',
      role: 'Advisory Board Member',
      pronouns: 'she/her',
      affiliation: 'Senior UX Designer, Acquia',
      image: Voghel,
      linkedin: 'alison-voghel',
      bio:
        'received her BA in Environmental Design at CU Boulder in 2012 and her Masters in Architecture & Urban Design in 2017. She has worked in tech, architecture, urban design, and interior design but transitioned to UX and UI Design in 2020. Alison currently works full-time as a Senior UX Designer for a SaaS company based in Boston, remotely. She has never been involved in any theater-related organizations, but did have fun designing a theater for a student project. When not working or learning how to code, her creative outlet of choice is digital art/illustration.'
    }
  ]
};

export default bios;
