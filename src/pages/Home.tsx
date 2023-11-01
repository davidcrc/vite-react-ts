import styles from "./home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className="text-4xl font-bold">Bienvenido a mi proyecto</h1>
      <p className="text-lg">Este es el componente Home</p>
    </div>
  );
};

export default Home;
