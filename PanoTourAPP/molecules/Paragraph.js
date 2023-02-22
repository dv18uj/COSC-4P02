//import Heading from '../atoms/Heading.js'
import Subheading from '../atoms/Subheading'
import Heading from '../atoms/Heading'

const Paragraph = ({ leftText, rightText }) => {
        return(
            <View style={styles.container}>
            <View style={styles.leftContainer}>
              <Text style={styles.text}>{leftText}</Text>
            </View>
            <View style={styles.rightContainer}>
              <Text style={styles.text}>{rightText}</Text>
            </View>
          </View>
        )
}

export default Paragraph


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
});
