const zlib = require('zlib');
const p=require('process');
const fs=require('fs');
const path = require('path');
d=""
const mode=p.argv[2]
const command=p.argv[3]
const fpath1=p.argv[4]
const f2 =p.argv[5]||null

switch (mode) {
    case "-s":
        synchronous_S_gf();

        
        break;

        case "-c":
          asynchronous_a_gf();
            break;

            
        case "-p":
          promisses_s_gf();
            break;
            case "-stream":
                stream_S_gf();
                  break;

    default:
        break;
}

function synchronous_S_gf() {
    switch (command) {
        case "touch":
            fs.writeFileSync(fpath1, "");
            break;
            case "write":
                fs.writeFileSync(fpath1, f2);
                break;
                case "append":
                    fs.appendFileSync(fpath1,f2);
                    break;
                    case "read":
                       console.log(fs.readFileSync(fpath1).toString());
                        break;
                        case "rename":
                          fs.renameSync(fpath1,f2);
                             break;
                             case "delete":
                                fs.unlinkSync(fpath1);
                               break;
                                 case "move":
                                    fs.copyFileSync(fpath1,f2);
                                    fs.unlinkSync(fpath1);
                                   
                                     break;
                                     case "zip":
                                        let zipPath = f2||fpath1+".gzip"
                                        
                                            let t=fs.readFileSync(fpath1).toString()
                                           let z= zlib.gzipSync(t)
                                            fs.writeFileSync(zipPath,z)
                                            
                                        
                                        
                                    
                                     
                                     break;
                        
        default:
            break;
    }
}




function asynchronous_a_gf() {
    switch (command) {
        case "touch":
            fs.writeFile(fpath1, "",(err)=>{
                if (err) {
                    console.log(err);
                    
                } 
            });
            break;
            case "write":
                fs.writeFile(fpath1, f2,(err)=>{
                    if (err) {
                        console.log(err);;
                        
                    } 
                })
                break;
                case "append":
                    fs.appendFile(fpath1,f2,(err)=>{
                        if (err) {
                            console.log(err);;
                            
                        } 
                    });
                    break;
                    case "read":
                        fs.readFile(fpath1, (err, data) => {
                            if (err) throw err;
                            console.log(data.toString());
                          });
                        break;
                        case "rename":
                          fs.rename(fpath1,f2,(err)=>{
                            if (err) {
                                console.log(err);;
                                
                            } 
                        });
                             break;
                             case "delete":
                                fs.unlink(fpath1,(err)=>{
                                    if (err) {
                                        console.log(err);;
                                        
                                    } 
                                });
                               break;
                                 case "move":
                                    fs.copyFile(fpath1,f2,(err)=>{
                                        if (err) {
                                            console.log(err);;
                                            
                                        } 
                                    });
                                    fs.unlink(fpath1,(err)=>{
                                        if (err) {
                                            console.log(err);;
                                            
                                        } 
                                    });
                                   
                                     break;
                                     case "zip":
                                        let zipPath = f2||fpath1+".gzip"
                                
                                        fs.readFile(fpath1, (err, data) => {
                                            if (err) throw err;
                                            
                                           


                                                let   t= data.toString();


                                           let z= zlib.gzip(t,(err,data)=>{
                                            if (err) {
                                                console.log(err);
                                                
                                            } 
                                            else{
                                                fs.writeFile(zipPath,data.toString(),(err)=>{
                                                    if (err) {
                                                        console.log(err);;
                                                        
                                                    } 
                                                });
                                            }
                                        });


                                       
                                                
                                           
                                         

                                          }
                                          
                                          
                                          
                                          );
                                          
                                       
                                         
                                           
                                            
                                        
                                        
                                    
                                     
                                     break;
                        
        default:
            break;
    }
}










async function promisses_s_gf() {
    switch (command) {
        case "touch":
         await  fs.promises.writeFile(fpath1,"")
            break;
            case "write":
              await  fs.promises.writeFile(fpath1,f2);
                break;
                case "append":
                   
                   try {
                    await fs.promises.appendFile(fpath1,f2)
                    
                   } catch (error) {
                    console.log(error);
                   }
                    break;
                    case "read":
                        try {
                            await  fs.promises.readFile(fpath1).then(data=>{console.log(data.toString());});  
                        } catch (error) {
                            console.log(error);
                            
                        }
                    
                        break;
                        case "rename":
                          try {
                            await fs.promises.rename(fpath1,fpath1)
                            console.log('file renamed');
                          } catch (error) {
                            console.log(error);
                            
                          }
                             break;
                             case "delete":
                              try {
                                await fs.promises.unlink(fpath1)
                                console.log('file deleted');
                                
                              } catch (error) {
                                console.log(error);
                                
                              }
                               break;
                                 case "move":
                                    try {
                                      await  fs.promises.copyFile(fpath1,f2)
                                       await fs.promises.unlink(fpath1)
                                       console.log('file moved');
                                        
                                    } catch (error) {
                                        console.log(error);
                                        
                                    }
                             
                                   
                                     break;
                                     case "zip":
                                        let zipPath = f2||fpath1+".gzip"
                                        try {
                                            const data_readed= await fs.promises.readFile(fpath1)
                                            const data_compressed=   zlib.gzipSync(data_readed.toString())
                                           await fs.promises.writeFile(zipPath,data_compressed);
                                            
                                        } catch (error) {
                                            console.log(error);
                                        }
                                       

                                       
                                     break;
                        
        default:
            break;
    }
}


function stream_S_gf() {
    switch (command) {
        case "touch":
            fs.WriteStream.
            break;
            case "write":
                fs.writeFileSync(fpath1, f2);
                break;
                case "append":
                    fs.appendFileSync(fpath1,f2);
                    break;
                    case "read":
                       fs.createReadStream(fpath1).on('data', (chunk) => {
                        console.log(chunk);
                    });
                        break;
                        case "rename":
                          fs.renameSync(fpath1,f2);
                             break;
                             case "delete":
                                fs.unlinkSync(fpath1);
                               break;
                                 case "move":
                                    fs.copyFileSync(fpath1,f2);
                                    fs.unlinkSync(fpath1);
                                   
                                     break;
                                     case "zip":
                                        let zipPath = f2||fpath1+".gzip"
                                        
                                            let t=fs.readFileSync(fpath1).toString()
                                           let z= zlib.gzipSync(t)
                                            fs.writeFileSync(zipPath,z)
                                            
                                        
                                        
                                    
                                     
                                     break;
                        
        default:
            break;
    }
}
