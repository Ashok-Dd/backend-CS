import http from 'http'

const port = 3000;

const server = http.createServer((req, res) => {

    
    if (req.url === '/myself') {
        res.statusCode = 200
        res.setHeader("Content-Type", "text/plain");
        res.write("                                                                                                       RESUME\n")
        res.write("_________________________________________________________________________________________________________________________________________________________________________________________________________________   \n")

        res.write("Name : BONGU ASHOK\nEmail: bonguashok86@gmail.com\nPhn.No: 9392954525\nAddress: 7-100 , Sridevi nagar , Narasannapeta , \n")
        res.write("         Srikakulam , 532421 , Andhrapradesh, India\n\n\n")
        res.write("_________________________________________________________________________________________________________________________________________________________________________________________________________________   \n")

        res.write("Career Objective : \n")
        res.write("                   To work in a reputed Organisation which enhances my skills and abilities where I can gain experience for the benifit of Organisation as well as for Self growth .\n\n\n")
        res.write("_________________________________________________________________________________________________________________________________________________________________________________________________________________   \n")

        res.write("Academic Qualification : \n")
        res.write("                           BTECH                     SRKREC                     2020-2024                     94.3%\n")
        res.write("                           Intermediate              Sri Chaitanya              2018-2020                     96.3%\n")
        res.write("                           SSC                       Ravindra Bharathi            2018                        98.0%\n\n\n")
        res.write("_________________________________________________________________________________________________________________________________________________________________________________________________________________   \n")

        
       res.write("Extra Qualification : I have completed my Cyber-security certifiction course through online .\n\n")
       res.write("_________________________________________________________________________________________________________________________________________________________________________________________________________________   \n")
 
       res.write("Technical Skills : \n")
        res.write("      Computer Skills : MS WORD\n")
        res.write("                        MS EXCEL\n")
        res.write("                        Power Pint\n")
        res.write("      Programming languages : \n")
        res.write("                        C\n")
        res.write("                        JAVA\n")
        res.write("                        C++\n")
        res.write("                        PYTHON\n\n\n")
        res.write("_________________________________________________________________________________________________________________________________________________________________________________________________________________   \n")

        res.write("Strengths : Hard working\n")
        res.write("            Self motivated\n")
        res.write("            Problem Solving Capability\n\n")
        res.write("_________________________________________________________________________________________________________________________________________________________________________________________________________________   \n")

        res.write("Hobbies : Playing Cricket\n")
        res.write("          Coding\n")
        res.write("          Listening Songs\n\n")
        res.write("_________________________________________________________________________________________________________________________________________________________________________________________________________________   \n")

        res.write("Declaration : \n")
        res.write("              I here by declare that all the above mentioned data is true to the best of my knowledge and brief .\n\n")
        res.write("_________________________________________________________________________________________________________________________________________________________________________________________________________________   \n")

        res.write("Signature : \n")
        res.write("BONGU ASHOK\n")
        res.write("Narasannapeta\n")
        res.write("07/08/2024\n")
        res.end()
    }

    else if (req.url === '/html') {
        res.statusCode = 200
        res.setHeader("Content-Type", "text/html");
        res.write('<body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0; background-color: rgb(195, 177, 144); color: rgb(51, 51, 51);">\n')
        res.write('<div style="max-width: 800px; margin: 20px auto; padding: 20px; background: wheat; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); border-radius: 7px;">\n')
        res.write('<header style="text-align: center;">\n')
        res.write('<h1 style="margin: 0;">BONGU ASHOK</h1>\n')
        res.write('<p style="margin: 0;">bonguashok@gmail.com</p>\n')
        res.write('<p style="margin: 0;">phn No : 9392954525 </p>\n')
        res.write('<p style="margin: 0;">7-100,Sridevi nagar,Narasannapeta,srikakulam,532421</p>\n')
        res.write('</header>\n')
        res.write('<section style="margin-top: 20px;"><h2 style="border-bottom: 2px solid rgb(51, 51, 51); padding-bottom: 5px;">Career Objective</h2><p>To work in a reputed Organisation which enhances my skills and abilities where I can gain experience for the benifit of Organisation as well as for Self growth .</p></section>\n')
        res.write('<section style="margin-top: 20px;"><h2 style="border-bottom: 2px solid rgb(51, 51, 51); padding-bottom: 5px;">Academic Qualification</h2><div style="margin-bottom: 15px;">\n')
        res.write('<table style="text-align: center; width: 100%;"><tr><th>Qualification</th><th>College/School</th><th>Year of study</th><th>Percentage</th></tr>\n')
        res.write('<tr><td>BTECH</td><td>SRKREC</td><td>2020-2024</td><td>94.3%</td></tr>\n')
        res.write('<tr><td>Intermediate</td><td>Srichaitanya</td><td>2018-2020</td><td>96.3%</td></tr>\n')
        res.write(' <tr><td>SSC</td><td>Ravindra Bharathi</td><td>2018</td><td>98.0%</td></tr>\n')
        res.write('</table></div></section>\n')
        res.write('<section style="margin-top: 20px;"><h2 style="border-bottom: 2px solid rgb(51, 51, 51); padding-bottom: 5px;">Qualification</h2><p>I have completed Cyber-Security certification course through online.</p> </section>\n')
        res.write('<section style="margin-top: 20px;"><h2 style="border-bottom: 2px solid rgb(51, 51, 51); padding-bottom: 5px;">Technical Skills</h2>\n')
        res.write('<ol><li>Computer Skills <ul style="margin: 0; padding-left: 20px;"><li>MS WORD</li><li>MS EXCEL</li><li>Power point</li></ul></li>\n')
        res.write(' <li>Programming Skills<ul style="margin: 0; padding-left: 20px;"><li>C</li><li>PYTHON</li><li>JAVA</li></ul></li></ol></section>\n')
        res.write('<section style="margin-top: 20px;"><h2 style="border-bottom: 2px solid rgb(51, 51, 51); padding-bottom: 5px;">Strengths</h2><ul style="margin: 0; padding-left: 20px;"><li>Hard working</li><li>Self motivated</li><li>Problem solving capability</li></ul></section>\n')
        res.write('<section style="margin-top: 20px;"><h2 style="border-bottom: 2px solid rgb(51, 51, 51); padding-bottom: 5px;">Hobbies</h2><ul style="margin: 0; padding-left: 20px;"><li>Playing Cricket</li><li>Coding</li><li>Listening Songs</li></ul></section>\n')
        res.write('<section style="margin-top: 20px;"><h2 style="border-bottom: 2px solid rgb(51, 51, 51); padding-bottom: 5px;">Languages known</h2><ul style="margin: 0; padding-left: 20px;"><li>English</li><li>Hindi</li><li>Telugu</li></ul></section>\n')
        res.write('<footer style="margin-top: 20px; text-align: center;"><p><strong>Declaration : </strong>I here by declare that all the above mentioned data is true to the best of my knowledge and brief .</p></footer>\n')
        res.write('</div></body>\n')
        
      
        
        res.end()
    }

    else if (req.method === 'POST' && req.url === '/recivedata') {
        res.statusCode = 200
        res.setHeader("Content-Type", "application/json");
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        });
        console.log(body)
        res.end()
    }

    else if (req.url === '/senddata') {
        res.statusCode = 200
        res.setHeader("Content-Type", "application/json");
        const data = {  Name: "BONGU ASHOK",
                        Email: "bonguashok86@gmail.com",
                        PhnNo: 9392954525,
                        Address:{
                            doorNo:'7-100',
                            Street:'Sridevi nagar',
                            Mandal:'Narasannapeta',
                            District:'Srikakulam',
                            PIN:532421 
                        },
                        CareerObjective:'To work in a reputed Organisation which enhances my skills and abilities where I can gain experience for the benifit of Organisation as well as for Self growth .',
                        AcademicQualification:[
                            {
                                Qualifcation:'BTECH',
                                College:'SRKREC',
                                Year:'2020-2024',
                                Percentage:'94.3%'
                            },
                            {
                                Qualifcation:'Intermediate',
                                College:'Srichaitanya',
                                Year:'2018-2020',
                                Percentage:'96.3%'
                            },
                            {
                                Qualifcation:'SSC',
                                College:'Ravindra Bharathi',
                                Year:'2018',
                                Percentage:'98.0%'
                            }
                        ],
                        ExtraQualification:'I have completed my Cyber-security certifiction course through online .',
                        TechnicalSkills:{
                            ComputerSkills:['MS WORD','MS EXCEL','Power point'],
                            ProgrammingSkills:['C','C++','Python']
                        },
                        Strengths:['Hard working','Self motivated','Problem solving capacity'],
                        Hobbies:['Playing Cricket','Coding','Listening Music'],
                        Declaration:'I here by declare that all the above mentioned data is true to the best of my knowledge and brief .',
                        Signature:{
                            Name:'B.Ashok',
                            place:'Narasannapeta',
                            Date:'07/08/2024'
                        }
                    }
        res.end(JSON.stringify(data))
    }

    else {
        res.statusCode = 400
        res.end("Page Not Found\n")
    }
});

server.listen(port, () => {
    console.log(`Server running at ${port}`);
});