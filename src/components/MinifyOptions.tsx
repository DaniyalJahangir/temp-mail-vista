
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

interface MinifyOptionsProps {
  type: 'javascript' | 'css';
}

const MinifyOptions = ({ type }: MinifyOptionsProps) => {
  const [options, setOptions] = useState({
    removeComments: true,
    removeWhitespace: true,
    compressVariables: type === 'javascript',
    mangleNames: type === 'javascript',
    inlineSmallFunctions: type === 'javascript',
    removeUnusedCSS: type === 'css',
    combineMediaQueries: type === 'css',
    compressionLevel: 80,
  });

  const handleToggleChange = (key: string) => {
    setOptions(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev],
    }));
  };

  const handleSliderChange = (value: number[]) => {
    setOptions(prev => ({
      ...prev,
      compressionLevel: value[0],
    }));
  };

  return (
    <Card className="shadow-md border-0">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Minification Options</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="remove-comments" className="text-sm font-medium text-gray-700">
              Remove Comments
            </Label>
            <Switch
              id="remove-comments"
              checked={options.removeComments}
              onCheckedChange={() => handleToggleChange('removeComments')}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <Label htmlFor="remove-whitespace" className="text-sm font-medium text-gray-700">
              Remove Whitespace
            </Label>
            <Switch
              id="remove-whitespace"
              checked={options.removeWhitespace}
              onCheckedChange={() => handleToggleChange('removeWhitespace')}
            />
          </div>
          
          {type === 'javascript' && (
            <>
              <div className="flex items-center justify-between">
                <Label htmlFor="compress-variables" className="text-sm font-medium text-gray-700">
                  Compress Variables
                </Label>
                <Switch
                  id="compress-variables"
                  checked={options.compressVariables}
                  onCheckedChange={() => handleToggleChange('compressVariables')}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="mangle-names" className="text-sm font-medium text-gray-700">
                  Mangle Names
                </Label>
                <Switch
                  id="mangle-names"
                  checked={options.mangleNames}
                  onCheckedChange={() => handleToggleChange('mangleNames')}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="inline-functions" className="text-sm font-medium text-gray-700">
                  Inline Small Functions
                </Label>
                <Switch
                  id="inline-functions"
                  checked={options.inlineSmallFunctions}
                  onCheckedChange={() => handleToggleChange('inlineSmallFunctions')}
                />
              </div>
            </>
          )}
          
          {type === 'css' && (
            <>
              <div className="flex items-center justify-between">
                <Label htmlFor="remove-unused" className="text-sm font-medium text-gray-700">
                  Remove Unused CSS
                </Label>
                <Switch
                  id="remove-unused"
                  checked={options.removeUnusedCSS}
                  onCheckedChange={() => handleToggleChange('removeUnusedCSS')}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="combine-media" className="text-sm font-medium text-gray-700">
                  Combine Media Queries
                </Label>
                <Switch
                  id="combine-media"
                  checked={options.combineMediaQueries}
                  onCheckedChange={() => handleToggleChange('combineMediaQueries')}
                />
              </div>
            </>
          )}
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="compression-level" className="text-sm font-medium text-gray-700">
                Compression Level
              </Label>
              <span className="text-sm font-medium text-brand-600">
                {options.compressionLevel}%
              </span>
            </div>
            <Slider
              id="compression-level"
              value={[options.compressionLevel]}
              min={0}
              max={100}
              step={1}
              onValueChange={handleSliderChange}
              className="py-2"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>Lower</span>
              <span>Higher</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MinifyOptions;
