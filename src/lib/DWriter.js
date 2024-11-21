const notebook =  require('../docs/texts').default;



class DWriter {
  constructor($_pointer, $_reset = false){
    this.root =  document.getElementById($_pointer)
    this.root.innerHTML = $_reset ? '' : this.root.innerHTML;
    this.counter = 1;
  }

  point($_new){
    this.root =  document.getElementById($_new)
  }
  append($_html){
    this.root.innerHTML +=  $_html
  }

  addCard($_header,$_body){
    const CARD = 'card';
    let html = this.make(CARD);
    return html.replace('{{CARD_ID}}','card-'+$_header.toLowerCase().replace(/\s/g,'-'))
               .replace('{{CARD_HEADER}}',$_header)
               .replace('{{CARD_BODY}}',$_body);
  }
  addParragraph($_text){
    const PARRAGRAPH = 'parragraph';
    let html = this.make(PARRAGRAPH);

    return html.replace('{{PARRAGRAPH_TEXT}}',$_text);
  }
  addCodeBlock($_code){
    const CODE_BLOCK = 'code-block';
    let html = this.make(CODE_BLOCK);
    return html.replaceAll('{{CODE_ID}}',`${CODE_BLOCK}-${this.counter}`)
               .replace('{{CODE_TEXT}}',`${$_code}`)
               .split('\n').filter(function(line){ 
                return line.indexOf( "//js" ) == -1;
              }).join('\n')
              .split('\n').filter(function(line){ 
                return line.indexOf( "//!js" ) == -1;
              }).join('\n');
  }

  make($_type){
    switch($_type) {
      case 'code-block':
        return notebook.blocks.code_block;
      case 'card':
          return notebook.blocks.card;
      case 'parragraph':
        return notebook.blocks.parragraph;
      default:
        break;
    }
  }
}

export default DWriter;