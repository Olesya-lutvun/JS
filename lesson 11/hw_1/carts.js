const cartsDiv = document.getElementById('carts')
fetch('https://dummyjson.com/carts')
   .then(value => value.json())
    .then(cartsObject => {
        const {carts} = cartsObject;
        console.log(carts);


        for (const cart of carts) {
            const div = document.createElement('div');
            div.classList.add('card-conteiner');
            const divWithInfo= document.createElement('div')
            divWithInfo.innerText = `
          "total": ${cart.total},
          "userId": ${cart.userId},
          "totalProducts": ${cart.totalProducts},
          "totalQuantity": ${cart.totalQuantity},
          "discountedTotal": ${cart.discountedTotal}
            `

            const ol = document.createElement('ol')
            div.append(divWithInfo, ol);

            for (const product of cart.products) {
                const li = document.createElement('li');
                li.innerText = `
                "id": ${product.id},
                "title": ${product.title},
                "price": ${product.price},
                "quantity": ${product.quantity},
                "total": ${product.total},
                "discountPercentage": ${product.discountPercentage},
                "discountedTotal": ${product.discountedTotal},
                `
                const img = document.createElement('img')
                img.src = product.thumbail;
                li.appendChild(img)


                ol.appendChild(li)
            }
            cartsDiv.appendChild(div);

        }
    });