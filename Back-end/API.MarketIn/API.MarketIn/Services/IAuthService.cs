using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.MarketIn.Services
{
    public interface IAuthService
    {
        string GenerateJwtToken(string email);
    }
}
