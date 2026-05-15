import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CloseButton } from "./CloseButton";

const getRandomNotification = () => {
  const notifications = [
    { "title": "New Insight", "message": "Explore our latest creative breakthrough." },
    { "title": "Upcoming Event", "message": "Join us for a talk on future innovation." },
    { "title": "Fresh Perspective", "message": "See creativity from a new angle." },
    { "title": "Collaboration", "message": "Connect with pioneers in design and research." },
    { "title": "Journal Entry", "message": "New thoughts on experimental creativity." },
    { "title": "Behind the Scenes", "message": "A look into our latest exploration." },
    { "title": "Creative Challenge", "message": "Push your imagination with this prompt." },
    { "title": "Lab Update", "message": "Exciting progress—see what’s next." },
    { "title": "Exclusive Insight", "message": "Unlock a new way of thinking." },
    { "title": "Now Streaming", "message": "Watch our latest talk on creativity." },
    { "title": "Open Call", "message": "Share your ideas with our research team." },
    { "title": "Latest Exploration", "message": "Reimagining the limits of creativity." },
    { "title": "New Connections", "message": "Meet visionaries shaping the future." },
    { "title": "Curated Inspiration", "message": "Ideas to spark your next breakthrough." },
    { "title": "Monthly Recap", "message": "A look at our latest projects." },
    { "title": "Experimental Findings", "message": "A fresh take on design and thinking." },
    { "title": "Future Visions", "message": "Radical ideas shaping tomorrow." },
    { "title": "Thought Experiment", "message": "Step into a new creative mindset." },
    { "title": "New Collaboration", "message": "A partnership redefining possibilities." },
    { "title": "Stay Curious", "message": "A daily spark of unconventional ideas." }
  ];
  return notifications[Math.floor(Math.random() * notifications.length)];
};

export const Notification = () => {
  const [notifications, setNotifications] = useState<{ title: string; message: string }[]>([]);

  useEffect(() => {
    // Asegura que la notificación inicial solo se genere en el cliente
    setNotifications([getRandomNotification()]);
  }, []);

  return (
    <div className="container flex justify-center">
      <ul>
        <AnimatePresence initial={false} mode="popLayout">
          {notifications.map((notif, index) => (
            <motion.li
              className="relative mt-[5px]"
              key={index}
              layout
              initial={{ opacity: 0, y: 50, scale: 0.3 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.3 } }}
            >
              <div className="flex items-center gap-[10px] bg-black pt-[8px] pb-[8px] px-[8px] rounded-[16px] w-[320px] 2xl:w-[350px] border border-[#ffffff25]">
                <div className="w-[40px] h-[40px] rounded-[8px] bg-white flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.5866 15.8538L14.5115 16.9314V5.55517H9.02898C8.83444 5.56554 8.64937 5.6424 8.50472 5.77291L5.06914 9.21644C4.94906 9.33668 4.9894 9.43418 5.15903 9.43418H10.5802V22.5667C10.5802 22.7367 10.6774 22.777 10.7973 22.6568L11.7759 21.676C11.9062 21.5306 11.9828 21.3451 11.9931 21.1502V8.018H8.26289L9.30718 6.97135H13.0987V20.0423C13.0987 20.2125 13.1959 20.2528 13.3158 20.1325L16.7827 16.6581C16.913 16.5129 16.9897 16.3275 17 16.1326V3.30779C17 3.22629 16.9677 3.1481 16.9102 3.0904C16.8526 3.03269 16.7746 3.00018 16.6931 3H11.5784C11.3839 3.01037 11.1988 3.0872 11.0541 3.21765L10.0757 4.19852C9.95574 4.31868 9.9959 4.41626 10.1657 4.41626H15.5868V15.8538H15.5866Z" fill="#000000"></path>
                  </svg>
                </div>
                <div className="grow">
                  <div className="flex items-center justify-between mb-[2px]">
                    <h5 className="text-white text-sm font-medium tracking-tighter leading-[120%]">{notif.title}</h5>
                    <span className="text-grey text-xs tracking-tighter leading-[100%] opacity-50">now</span>
                  </div>
                  <p className="text-grey text-xs tracking-tighter leading-[120%]">{notif.message}</p>
                </div>
              </div>
              <CloseButton close={() => setNotifications(notifications.filter((_, i) => i !== index))} />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
      <button
        className="absolute bottom-[15px] flex items-center justify-center p-3 rounded-[50%] bg-white transition-all duration-300 ease-in-out hover:scale-[1.1]"
        onClick={() => setNotifications((prev) => [...prev, getRandomNotification()])}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 12L2 12" stroke="#000000" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M12 2L12 22" stroke="#000000" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      </button>
    </div>
  );
};

export default Notification
