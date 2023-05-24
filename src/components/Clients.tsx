import { clients } from "../constants";
import styles from "../stlyes";

export default function Clients() {
  return (
    <section className={` ${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[189px] min-w-[120px] feature-card rounded-[10px] py-3 px-4`}
          >
            <img
              alt={client.name}
              src={client.logo}
              className="w-[100px] sm:w-[189px] object-contain mb-1"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
