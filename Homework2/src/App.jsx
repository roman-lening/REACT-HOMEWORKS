import Greeting from "./components/GreetingComponent/Greeting";
import ShoppingList from "./components/ShoppingListComponent/ShoppingList";
import OrderStatus from "./components/OrderStatusComponent/OrderStatus";
function App() {
  const items = ["Apple", "Orange", "Watermellon", "Kiwi", "Kinder"];
  const orders = [
    { orderId: 1, status: "В пути" },
    { orderId: 2, status: "Обработан" },
    { orderId: 3, status: "Доставлен" },
    { orderId: 4, status: "Обработан" },
    { orderId: 5, status: "Доставлен" },
    { orderId: 6, status: "В пути" },
  ];
  return (
    <div>
      <Greeting name="Roman" />
      <ShoppingList items={items} />
      <ol>
        {orders.map((order) => (
          <OrderStatus
            key={order.orderId}
            orderId={order.orderId}
            status={order.status}
          />
        ))}
      </ol>
    </div>
  );
}

export default App;
