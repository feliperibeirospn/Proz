 const form = document.getElementById('product-form');
    const feedback = document.getElementById('feedback');
    const productList = document.getElementById('product-list');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const productName = document.getElementById('product-name').value;
      const productValue = document.getElementById('product-value').value;
      const productDescription = document.getElementById('product-description').value;

      const requestData = {
        produto: productName,
        valor: productValue,
        descrição: productDescription
      };

      try {
        const response = await fetch('https://httpbin.org/post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestData)
        });

        const responseData = await response.json();

        if (response.ok) {
          feedback.textContent = 'Produto cadastrado com sucesso!';
          form.reset();
          displayProduct(productName, productValue, productDescription);
        } else {
          feedback.textContent = 'Erro ao cadastrar o produto. Por favor, tente novamente.';
        }
      } catch (error) {
        console.error('Ocorreu um erro:', error);
        feedback.textContent = 'Ocorreu um erro ao processar a solicitação. Por favor, tente novamente mais tarde.';
      }
    });

    function displayProduct(name, value, description) {
      const li = document.createElement('li');
      li.textContent = `${name} - R$ ${value} - ${description}`;
      productList.appendChild(li);
    }
