
// migrate.js ile aldığım veriler.
// https://miragejs.com/quickstarts/react-native/react-native-testing-library/ 
// buradan mirage api yapısına ulaşabiliyorsunuz.

export const posts = [
    { id: 1,
       profile_pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw0i3jWCEJbxTz1odqse7qLhkj-oT7W114g1XJfcvnGdg1s06JAkoZ6b0j0ZP0fOPLMfA&usqp=CAU',
       profile_name: "George-j19",
       imageOneUrl:'https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
       imageTwoUrl:'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
       videoUrl:'https://player.vimeo.com/external/537550621.sd.mp4?s=d01b441dbace4d02fb2b3c373ea1d226dd8b68ba&profile_id=165&oauth2_token_id=57447761',
       likeNum: 4023,
       commentNum: 542,
       comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum laboriosam natus et est aut, magni laborum sunt omnis excepturi error accusamus explicabo reiciendis exercitationem illum voluptatum nam quod! Odio, non?'
      },
      { id: 2,
          profile_pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlXCTlMvfcUMsJ4r4seTYMY8_k8V31eV3LKUxkdR34n0BurNYuarum86BROpRlbhoQlxU&usqp=CAU',
          profile_name: "Mike-x142",
          imageOneUrl:'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          imageTwoUrl:'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          videoUrl:'https://player.vimeo.com/external/515290403.sd.mp4?s=cb3038a76cbab591525368a48f7c2cb487af38f7&profile_id=165&oauth2_token_id=57447761',
          likeNum: 20310,
          commentNum: 423,
          comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quia sit consequuntur, impedit saepe modi officiis voluptas culpa nihil voluptatibus rem inventore cumque magnam. Id sed architecto maxime quod quisquam?'
         },
      { id: 3,
      profile_pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe7vkZmiWclsVehD0Y7AsIhfnGaRWk7t_8YR7sVWdQGpTF1ZAb9QNzmoB9qVNRWjJDGNA&usqp=CAU',
      profile_name: "Micheal-12s",
      imageOneUrl:'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      imageTwoUrl:'https://images.unsplash.com/photo-1579710758949-3ab36db30f1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MTV8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      videoUrl:'https://player.vimeo.com/external/636228052.sd.mp4?s=8c41aa750e23801a35d17f29f025046979a5c47a&profile_id=165&oauth2_token_id=57447761',
      likeNum: 300,
      commentNum: 12,
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum rem placeat voluptates accusantium, provident nihil accusamus recusandae, eveniet esse, repellendus omnis pariatur harum atque. Facere commodi ipsa perferendis maiores debitis.'
      },
      { id: 4,
      profile_pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6muK7QW21GoigwB82VKKS5pDhKj6sS8YE5aneCjlRC_75_Ub0hi5qpZUFt0PlNEMYBfk&usqp=CAU',
      profile_name: "Alice-41X",
      imageOneUrl:'https://images.unsplash.com/photo-1513171920216-2640b288471b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      imageTwoUrl:'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      videoUrl:'https://player.vimeo.com/external/531525940.sd.mp4?s=4104e676db37510a3dce12f8c625458568dac154&profile_id=165&oauth2_token_id=57447761',
      likeNum: 12024,
      commentNum: 3023,
      comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, sint. Magni nisi perspiciatis expedita ex, beatae architecto explicabo distinctio cupiditate, soluta quaerat, incidunt ea quasi reprehenderit ut. Aut, assumenda est!'
      },
      { id: 5,
      profile_pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi8hV4c6eM5h9mKAuSFR354N-t3IjO8JBv1VmOK2R1dTcFIiNmMy5aIxRbVIrBIXlrQt0&usqp=CAU',
      profile_name: "Richard-2sA",
      imageOneUrl:'https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      imageTwoUrl:'https://images.unsplash.com/photo-1470075801209-17f9ec0cada6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVpbGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      videoUrl:'https://player.vimeo.com/external/442255041.sd.mp4?s=c6894ba65bc97d9121a6f4457f24ed6d7d0aca68&profile_id=139&oauth2_token_id=57447761',
      likeNum: 142,
      commentNum: 4,
      comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam suscipit accusantium totam molestiae, excepturi deleniti eius mollitia corrupti asperiores numquam quasi, repudiandae in ipsa atque autem odio ducimus! Sit, quae?'
      },
]
