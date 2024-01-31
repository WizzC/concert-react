using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace testMongo.Dto
{
    public class UsersDto
    {
      
        public string Email { get; set; }

        public string Password { get; set; }

        public bool Admin { get; set; }
    }

    public class UsersDtoOut
    {

        public string Id { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public bool Admin { get; set; }
    }
}
