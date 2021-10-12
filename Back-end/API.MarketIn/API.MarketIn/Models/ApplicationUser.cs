﻿using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API.MarketIn.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string Username { get; set; }
        public string Email { get; set; }
        //public string Password { get; set; }
    }
}
