const articles = require("./articles.js");

const createMail = name => {
  const html = `
    <p style="font-family:sans-serif">
      Hey ${name}!
      Here are your JS articles from the past two weeks.  
      
      <ul>
      ${articles.map(article => {
        return `<li>
          <p>${article.title}</p>
          <p>${article.description}</p>
          <p>This article was posted by ${article.author} on ${article.forum}</p>
        </li>`;
      })}
      </ul>

      That's all for The JS Post #${process.env.POST_NUMBER}!
      We will be back with more interesting articles in two weeks.

      Regards,
      The JS Post Team

    </p>
  `;

  return html;
};

// PS - Like our work? Help us improve by filling out a short survey on your website. Just click here
module.exports = createMail;
