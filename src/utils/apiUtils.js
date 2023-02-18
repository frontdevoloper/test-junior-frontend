function getApiPath(element) {
  let apiPath = { path: '/api/v4/', entityName: '' };

  switch (element) {
    case 'Сделка':
      apiPath.path += 'leads'; 
      apiPath.entityName = 'leads'; 
      break;
    case 'Контакт':
      apiPath.path += 'contacts'; 
      apiPath.entityName = 'contacts'; 
      break; 
    case 'Компания':
      apiPath.path += 'companies'; 
      apiPath.entityName = 'companies';       
      break;  
    default:
      break;
  }  
  return apiPath;
};


export { getApiPath };

