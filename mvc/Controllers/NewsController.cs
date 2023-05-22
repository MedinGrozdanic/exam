using DAL;
using Microsoft.AspNetCore.Mvc;
using Service.Models;
using Service.Services;
using System.Text.RegularExpressions;

namespace mvc.Controllers
{
    public class NewsController : Controller
    {
        private readonly ILogger<NewsController> _logger;

        public ArticleService Service;


        public NewsController(ILogger<NewsController> logger)
        {
            _logger = logger;
            Service = ArticleService.Instance;
        }


        public IActionResult StartPage()
        {
            ViewBag.Articles = ArticleService.Instance.GetPinnedArticles();

            ViewBag.LatestArticles = ArticleService.Instance.GetLatestArticles(5);

            return View();

        }



        [HttpGet]
        [Route("News/{input}" )]
        public IActionResult ArticlePage(string input)
        {
            var SiteRegex = new Regex(
                "^([0-9A-Fa-f]{8}[-]" +
                "[0-9A-Fa-f]{4}[-]" +
                "[0-9A-Fa-f]{4}[-]" +
                "[0-9A-Fa-f]{4}[-]" +
                "[0-9A-Fa-f]{12})");
            Guid Guid = Guid.Parse(SiteRegex.Match(input).Value);
            ViewBag.articleId = Guid;
            ArticleService articleService = new ArticleService();
            var article = articleService.GetById(Guid);
            ViewBag.returnUrl = "https://localhost:7208/" + input;
            ViewBag.article = article;


            return View(article);
        }

        [HttpPost("[Controller]/CreateComment")]
        public IActionResult AddNewComment(ArticleDTO articleDTO)
        {


            Service.AddComment(new CreateCommentDTO{
                ArticleId = Guid.Parse(articleDTO.Id.ToString()),
                CommentedBy = articleDTO.NewComment.CommentedBy,
                Value = articleDTO.NewComment.Value
            });

            var regex = new Regex(@"[\s+]");
            var URL = regex.Replace(articleDTO.Title, "-").ToString();
            URL = articleDTO.Id + "-" + URL;

            return RedirectToAction(URL);
        }


    }
}