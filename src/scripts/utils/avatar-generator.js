class AvatarGenerator {
    static generate() {
      const random = Math.floor(Math.random() * 5) + 1;
      return `./images/avatar/${random}.png`;
    }
}
  
export default AvatarGenerator;