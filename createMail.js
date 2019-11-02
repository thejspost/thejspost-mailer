const articles = require("./articles.js");

const createMail = name => {
  const html = `
    <p style="font-family:sans-serif; font-size:14px;">
      Hey ${name}!<br />
      Here are your JavaScript articles from the past two weeks.  
      
      <ul style="padding: 0; list-style:none; font-size:14px;">
      ${articles
        .map((article, index) => {
          return `<li>
          <b style="font-size:16px;">
            <span>${index + 1}. </span>
            ${article.title}
          </b>
          <p>${article.description}</p>
          <p>Read the article here - ${article.link}</p>
          <p>
            Posted by ${article.author} 
            on ${article.forum}
          </p>
        </li>`;
        })
        .join(" ")}
      </ul>

      <br />
      That's all for The JS Post #${process.env.POST_NUMBER}. We will be back 
      with more interesting articles in two weeks. Stay tuned!<br /><br />

      Regards,<br />
      The JS Post Team<br /><br />

      PS - Like our initiative? Help us spread the word about The JS Post with other JS developers!
    </p>
  `;

  return html;
};

// PS - Like our work? Help us improve by filling out a short survey on your website. Just click here
module.exports = createMail;
