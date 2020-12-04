import RssModel from './RssModel';
import RssView from './RssView';
import RssController from './RssController';

export default () => {
  const rssModel = new RssModel();
  const rssView = new RssView(rssModel);
  const rssController = new RssController(rssModel, rssView);

  const updateFeeds = () => {
    const feeds = rssModel.getFeedUrlList();
    if (feeds.length === 0) {
      setTimeout(updateFeeds, 5000);
    } else {
      const updateAllFeeds = rssModel.updateAllFeeds();
      Promise.all(updateAllFeeds)
        .then(() => setTimeout(updateFeeds, 5000));
    }
  };

  rssController.init();
  updateFeeds();
};
