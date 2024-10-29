// Notification.js
const Notification = ({ message }) => {
    if (!message) return null;
  
    return (
      <div className="fixed top-4 right-4 md:top-8 md:right-8 bg-green-600 text-white p-2 rounded-md shadow-lg z-50">
        {message}
      </div>
    );
  };
  
  export default Notification;