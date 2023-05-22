using DAL;
using Microsoft.AspNetCore.Mvc;
using Service.Models;
using Service.Services;
using System.ComponentModel;
using System.Reflection;

namespace mvc.Controllers
{

    [Route("api/Articles")]
    [ApiController]
    
    public class ArticlesController : Controller
    {
       

        [HttpGet]
        public IActionResult List()
        {
            
            var ListArticle = ArticleService.Instance.GetAllArticles();
            
            
            return Ok(ListArticle);
        }


        [HttpPost]
        public IActionResult Create([FromBody] CreateArticleDTO articleDTO)
        {

            ArticleService.Instance.CreateArticle(articleDTO);

            return Ok(articleDTO);


        }


        [HttpGet("{articleId:Guid?}")]
        public IActionResult GetArticleID(Guid articleId)
        {
            var GetArticleID = ArticleService.Instance.GetById(articleId);
            return Ok(GetArticleID);
            
            
        }
    
        [HttpPut("{articleId:Guid?}")]
        public IActionResult UpdateArticleID([FromBody]UpdateArticleDTO updateArticleDTO)
        {

            ArticleService.Instance.UpdateArticle(updateArticleDTO);
            
            return Ok();
        }

        [HttpDelete("{articleId:Guid?}")]
        public IActionResult DeleteArticle(Guid articleId)
        {
           ArticleService.Instance.DeleteArticle(articleId);
            
            return Ok();
        }

    }
}
