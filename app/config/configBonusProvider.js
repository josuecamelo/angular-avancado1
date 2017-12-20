/**
 * Created by josuecamelo on 20/12/17.
 */
module.exports = function(bonusGeneratorProvider, configConstant){
    console.log(bonusGeneratorProvider.getLength());
    console.log(configConstant); //em alguns caso o value não funciona
    bonusGeneratorProvider.setLength(10);
};