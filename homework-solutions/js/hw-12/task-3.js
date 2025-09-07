// На сайте JSONPlaceholder - Free Fake REST API  с помощью функции fetch получить список пользователей. 
//   Вывести на экран: имя, e-mail, телефон и название компании пользователя.
//   Отдельными запросами получить список альбомов пользователя и список фотографий в альбомах. 
//   Дополнительно вывести список альбомов у пользователя с указанием количества в них фотографий. 
//   Для реализации трех запросов воспользоваться Promise.all().
//   (Принадлежность альбомов пользователем связано полем userId, принадлежность фотографий к альбомам сваязано полем albumId). 
//       Пример: 
//       1.  name: Leanne Graham
//           email: Sincere@april.biz
//           phone: 1-770-736-8031 x56442
//           company: Romaguera-Crona    
//           albums:
//             Album name 1 (10 photos)
//             Album name 2 (100 photos)
//       __________________________________

//       2.  name: Ervin Howell   
//           email: Shanna@melissa.tv 
//           phone: 010-692-6593 x09125
//           company: Deckow-Crist
//           albums:
//             Album name 1 (10 photos)
//             Album name 2 (100 photos)


async function task3(){
    try{
        const [users, albums, photos] = await Promise.allSettled([
            fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json()),
            fetch("https://jsonplaceholder.typicode.com/albums").then((res)=>res.json()),
            fetch("https://jsonplaceholder.typicode.com/photos").then((res)=>res.json()),
        ]);

        [users, albums, photos].forEach((obj) => {
            if (obj.status === "rejected") throw obj.reason;
        });
        
        users.value.forEach(user=>{
            const userAlbums = albums.value.reduce((result, album)=>{
                if (album.userId === user.id){
                    const photosCount = photos.value.filter((photo)=>album.id === photo.albumId).length;

                    result += `  ${album.title} (${photosCount} photos)\n`
                }
                return result;
            },"\n");
            user["albums"] = userAlbums;
        });

        users.value.forEach((user, index) => {
            console.log("Name: ",user.name);
            console.log("Email: ",user.email);
            console.log("Phone: ", user.phone);
            console.log("Company: ",user?.company?.name);
            console.log("Albums: ", user.albums,"\n");
        });
    } catch(e){
        console.log(e);
    }
}