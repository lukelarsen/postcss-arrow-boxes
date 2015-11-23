var postcss = require('postcss');

module.exports = postcss.plugin('arrow-boxes', function (options) {
    return function (css) {
        options = options || {};

        css.walkRules(function (rule) {
            rule.walkDecls(function (decl, i) {
                var value = decl.value.replace(/ /g,'');
                var valueArray = value.split(',');
                var property = decl.prop;

                if (property.indexOf( 'arrow-box' ) !== -1) {
                    var origRule = decl.parent,
                        ruleSelectorsBefore = origRule.selectors,
                        newRuleBefore;

                    // Stop the process if the first option isn't top, right, bottom, or left.
                    if(valueArray[0] !== 'top' && valueArray[0] !== 'right' && valueArray[0] !== 'bottom' && valueArray[0] !== 'left'){
                        console.log('Error: The first arrow-box option must be: top, right, bottom, or left. It was "' + valueArray[0] + '".');
                        return;
                    }

                    /////////////////////////////////////////////
                    //// If arrow placement is on the top ////
                    /////////////////////////////////////////////
                    if (valueArray[0] == 'top') {

                        // Stop the process if the second options isn't right, left, or center.
                        if(valueArray[1] !== 'right' && valueArray[1] !== 'left' && valueArray[1] !== 'center'){
                            console.log('Error: The second arrow-box option must be: right, left, or center when using top at the first option. The second option is currently set to "' + valueArray[1] + '".');
                            return;
                        }

                        // Insert overflow: auto
                        decl.cloneBefore({ prop: 'background-color',  value: valueArray[2] });

                        // Add the :before
                        ruleSelectorsBefore = ruleSelectorsBefore.map(function(ruleSelector){
                            return ruleSelector + ':before';
                        }).join(',\n');

                        newRuleBefore = origRule.cloneAfter({
                            selector: ruleSelectorsBefore
                        }).removeAll();

                        newRuleBefore.append(
                            'border-bottom-color: ' + valueArray[2] + ' !important;' +
                            'border: ' + valueArray[3] + ' solid transparent;' +
                            'position: absolute;' +
                            'bottom: 100%;' +
                            'border-collapse: separate;' +
                            'content: "";'
                        );

                        // If arrow location is right
                        if (valueArray[1] == 'right') {
                            newRuleBefore.append(
                                'right: ' + valueArray[3] + ';'
                            );

                        // If arrow location is left
                        } else if (valueArray[1] == 'left') {
                            newRuleBefore.append(
                                'left: ' + valueArray[3] + ';'
                            );

                        // If arrow location is center
                        } else if (valueArray[1] == 'center') {
                             newRuleBefore.append(
                                'left: 50%;' +
                                'margin-left: -' + valueArray[3] + ';'
                            );
                        } else {
                            console.log('ERROR: Arrow position must be either "right", "left", or "center".');
                        }

                        // Remove the original declaration
                        decl.remove();
                    }

                    /////////////////////////////////////////////
                    //// If arrow placement is on the right ////
                    /////////////////////////////////////////////
                    if (valueArray[0] == 'right') {

                        // Stop the process if the second options isn't top, bottom, or center.
                        if(valueArray[1] !== 'top' && valueArray[1] !== 'bottom' && valueArray[1] !== 'center'){
                            console.log('Error: The second arrow-box option must be: top, bottom, or center when using right at the first option. The second option is currently set to "' + valueArray[1] + '".');
                            return;
                        }

                        // Insert overflow: auto
                        decl.cloneBefore({ prop: 'background-color',  value: valueArray[2] });

                        // Add the :before
                        ruleSelectorsBefore = ruleSelectorsBefore.map(function(ruleSelector){
                            return ruleSelector + ':before';
                        }).join(',\n');

                        newRuleBefore = origRule.cloneAfter({
                            selector: ruleSelectorsBefore
                        }).removeAll();

                        newRuleBefore.append(
                            'border-left-color: ' + valueArray[2] + ' !important;' +
                            'border: ' + valueArray[3] + ' solid transparent;' +
                            'position: absolute;' +
                            'left: 100%;' +
                            'border-collapse: separate;' +
                            'content: "";'
                        );

                        // If arrow location is right
                        if (valueArray[1] == 'top') {
                            newRuleBefore.append(
                                'top: ' + valueArray[3] + ';'
                            );

                        // If arrow location is left
                        } else if (valueArray[1] == 'bottom') {
                            newRuleBefore.append(
                                'bottom: ' + valueArray[3] + ';'
                            );

                        // If arrow location is center
                        } else if (valueArray[1] == 'center') {
                             newRuleBefore.append(
                                'top: 50%;' +
                                'margin-top: -' + valueArray[3] + ';'
                            );
                        } else {
                            console.log('ERROR: Arrow position must be either "right", "left", or "center".');
                        }

                        // Remove the original declaration
                        decl.remove();
                    }

                    /////////////////////////////////////////////
                    //// If arrow placement is on the bottom ////
                    /////////////////////////////////////////////
                    if (valueArray[0] == 'bottom') {

                        // Stop the process if the second options isn't right, left, or center.
                        if(valueArray[1] !== 'right' && valueArray[1] !== 'left' && valueArray[1] !== 'center'){
                            console.log('Error: The second arrow-box option must be: right, left, or center when using bottom at the first option. The second option is currently set to "' + valueArray[1] + '".');
                            return;
                        }

                        // Insert overflow: auto
                        decl.cloneBefore({ prop: 'background-color',  value: valueArray[2] });

                        // Add the :before
                        ruleSelectorsBefore = ruleSelectorsBefore.map(function(ruleSelector){
                            return ruleSelector + ':before';
                        }).join(',\n');

                        newRuleBefore = origRule.cloneAfter({
                            selector: ruleSelectorsBefore
                        }).removeAll();

                        newRuleBefore.append(
                            'border-top-color: ' + valueArray[2] + ' !important;' +
                            'border: ' + valueArray[3] + ' solid transparent;' +
                            'position: absolute;' +
                            'top: 100%;' +
                            'border-collapse: separate;' +
                            'content: "";'
                        );

                        // If arrow location is right
                        if (valueArray[1] == 'right') {
                            newRuleBefore.append(
                                'right: ' + valueArray[3] + ';'
                            );

                        // If arrow location is left
                        } else if (valueArray[1] == 'left') {
                            newRuleBefore.append(
                                'left: ' + valueArray[3] + ';'
                            );

                        // If arrow location is center
                        } else if (valueArray[1] == 'center') {
                             newRuleBefore.append(
                                'left: 50%;' +
                                'margin-left: -' + valueArray[3] + ';'
                            );
                        } else {
                            console.log('ERROR: Arrow position must be either "right", "left", or "center".');
                        }

                        // Remove the original declaration
                        decl.remove();
                    }

                    /////////////////////////////////////////////
                    //// If arrow placement is on the left ////
                    /////////////////////////////////////////////
                    if (valueArray[0] == 'left') {

                        // Stop the process if the second options isn't top, bottom, or center.
                        if(valueArray[1] !== 'top' && valueArray[1] !== 'bottom' && valueArray[1] !== 'center'){
                            console.log('Error: The second arrow-box option must be: top, bottom, or center when using left at the first option. The second option is currently set to "' + valueArray[1] + '".');
                            return;
                        }

                        // Insert overflow: auto
                        decl.cloneBefore({ prop: 'background-color',  value: valueArray[2] });

                        // Add the :before
                        ruleSelectorsBefore = ruleSelectorsBefore.map(function(ruleSelector){
                            return ruleSelector + ':before';
                        }).join(',\n');

                        newRuleBefore = origRule.cloneAfter({
                            selector: ruleSelectorsBefore
                        }).removeAll();

                        newRuleBefore.append(
                            'border-right-color: ' + valueArray[2] + ' !important;' +
                            'border: ' + valueArray[3] + ' solid transparent;' +
                            'position: absolute;' +
                            'right: 100%;' +
                            'border-collapse: separate;' +
                            'content: "";'
                        );

                        // If arrow location is right
                        if (valueArray[1] == 'top') {
                            newRuleBefore.append(
                                'top: ' + valueArray[3] + ';'
                            );

                        // If arrow location is left
                        } else if (valueArray[1] == 'bottom') {
                            newRuleBefore.append(
                                'bottom: ' + valueArray[3] + ';'
                            );

                        // If arrow location is center
                        } else if (valueArray[1] == 'center') {
                             newRuleBefore.append(
                                'top: 50%;' +
                                'margin-top: -' + valueArray[3] + ';'
                            );
                        } else {
                            console.log('ERROR: Arrow position must be either "right", "left", or "center".');
                        }

                        // Remove the original declaration
                        decl.remove();
                    }

                }
            });
        });
    };
});