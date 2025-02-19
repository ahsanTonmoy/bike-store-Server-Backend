import app from './app'
import mongoose from 'mongoose'
import config from './app/config'
//

async function main() {
  try {
    await mongoose.connect(config.database_Url as string)

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

    // local
    app.listen(config.port, () => {
      console.log(`bike store app listening on  ${config.port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

main()
