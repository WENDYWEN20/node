function GameCard({ id, name, instock }) {
    const updateStock = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await fetch(`http://localhost:3000/api/games/${id}/instock`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({ instock: !instock })
        });
        if (!response.ok) throw new Error('Failed to update stock');
        const data = await response.json();
        console.log(data.message);
      } catch (error) {
        console.error(error.message); // Handle 401/403 errors
      }
    };
  
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className={`text-${instock ? 'green' : 'red'}-600`}>{instock ? 'In Stock' : 'Out of Stock'}</p>
        <button onClick={updateStock} className="mt-2 bg-blue-500 text-white p-2 rounded">
          Toggle Stock
        </button>
      </div>
    );
  }