using API.MarketIn.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace API.MarketIn.Controllers
{
    [Route("api/[controller]")]
    public class HomeController : ControllerBase
    {
       
        [HttpPost]
        [Route("Teste")]
        public IActionResult myFunc([FromBody] ApplicationUserModel user)
        {
            if(user.Email != null)
                return Ok(user);

            return NotFound();
        }
    }
}
