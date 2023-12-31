const deleteProduct = (btn) => {
  const prodId = btn.parentNode.querySelector('[name=productId]').value;
  const csrf = btn.parentNode.querySelector('[name=_csrf]').value;

  fetch(`/admin/product/${prodId}`, {
    method: 'DELETE',
    headers: {
      'csrf-token': csrf,
    },
  })
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      const productElement = btn.closest('article');
      productElement.remove();
    })
    .catch((err) => {
      console.log(err);
    });
};
