using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Primitives;
using testMongo.Dto;
using testMongo.Models;
using testMongo.Services;


namespace testMongo.Controlers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly UserService _userService;

        public UserController(UserService userService)
        {
            _userService = userService;
        }

        [Authorize]
        [HttpGet]
        public ActionResult<List<Users>> GetUsers()
        {
            // TODO tester ça s'il vous please
             Request.Headers.TryGetValue("Authorization", out StringValues headerValue);

            return _userService.GetUsers();
        }

        [Authorize]
        [HttpGet("{id:length(24)}")]
        public ActionResult<Users> GetUser(string id)
        {
            var user = _userService.GetUser(id);
            return Json(user);
        }

        [Authorize]
        [HttpPost]
        public ActionResult<Users> Create(Users user)
        {
            _userService.Create(user);
            return Json(user);
        }

        [AllowAnonymous]
        [Route("authenticate")]
        [HttpPost]
        public ActionResult Login([FromBody] UsersDto user)
        {
            var token = _userService.Authenticate(user.Email, user.Password);
            if (token == null)
                return Unauthorized();

            return Ok(new { token, user });
        }
    }
    
}
