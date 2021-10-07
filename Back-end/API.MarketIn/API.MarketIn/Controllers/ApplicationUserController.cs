using API.MarketIn.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.MarketIn.Controllers
{
    [Route("api/[controller]")]
    public class ApplicationUserController : ControllerBase
    {
        private UserManager<ApplicationUser> _userManager;
        private SignInManager<ApplicationUser> _signInManager;

        public ApplicationUserController(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        // POST: api/applicationuser/register
        [HttpPost]
        [Route("Register")]
        public async Task<Object> PostApplicationUser([FromBody] ApplicationUserModel user)
        {
            var applicationUser = new ApplicationUser()
            {
                Email = user.Email,
            };

            try
            {
                var result = await _userManager.CreateAsync(applicationUser, user.Password);
                return Ok(result);

            }catch(Exception e)
            {
                throw e;
            }
        }
    }
}
