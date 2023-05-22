using Microsoft.AspNetCore.Mvc;
using Service.Services;
using System.ComponentModel;

namespace mvc.Controllers
{
    [Route("api/images")]
    [ApiController]
    public class ImagesController : Controller
    {
        //public IActionResult Index()
        //{
        //    return View();
        //}


        public ImageService Service;

        public ImagesController()
        {
            Service = ImageService.Instance;
        }

        [HttpGet]

        public IActionResult ListImage()
        {
            var ListPics = ImageService.Instance.GetAll();

            return Ok(ListPics);


        }

        [HttpPost]
        public IActionResult UploadImage()
        {
            ImageService.Instance.Upload(Request.Form.Files[0]);

            return Ok();
        }
    }
}
