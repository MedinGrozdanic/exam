using DAL;
using Microsoft.AspNetCore.Mvc;
using Service.Models;
using Service.Services;
using System;

namespace mvc.Controllers
{

    [Route("api/Authors")]
    [ApiController]
    public class AuthorsController : Controller
    {

        [HttpGet]
        public IActionResult GetAuthor()
        {

            //var listAuthorDto = new List<AuthorDTO>();
            var ListAuthor = AuthorService.Instance.GetAuthors();

            //foreach (var author in ListAuthor)
            //{
            //    listAuthorDto.Add(new AuthorDTO()
            //    {
            //        Id = author.Id,
            //        FirstName = author.FirstName,
            //        LastName = author.LastName,
            //        ImageName = author.ImageName,
            //        Mail = author.Mail,
            //        TwitterUserName = author.TwitterUserName

            //    });
            //}


            return Ok(ListAuthor);
        }



        [HttpPost]
        public IActionResult CreateAuthor([FromBody] CreateAuthorDTO authorDTO)
        {
            try
            {

                AuthorService.Instance.CreateAuthor(authorDTO);

                return Ok(authorDTO);
            }
            catch (Exception err)
            {

                return BadRequest(err.Message);
            }



        }



        [HttpGet("{authorId:Guid?}")]
        public IActionResult GetAuthors(Guid? authorId = null)
        {

            if (authorId is null)
            {
                return BadRequest();
            }

            return Ok(AuthorService.Instance.GetAuthor(authorId.Value));
        }


        [HttpPut("{authorId:Guid?}")]
        public IActionResult UpdateAuthor([FromBody] UpdateAuthorDTO authorDTO)
        {
            AuthorService.Instance.UpdateAuthor(authorDTO);

            return Ok();


        }


        [HttpDelete("{authorId:Guid?}")]

        public IActionResult DeleteAuthorId(Guid authorId)
        {

            AuthorService.Instance.DeleteAuthor(authorId);


            return Ok();

        }



    }


}
